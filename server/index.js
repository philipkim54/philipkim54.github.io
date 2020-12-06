const express = require('express')
const morgan = require('morgan')
const gatsby = require('gatsby-plugin-nodejs')
const nodemailer = require('nodemailer')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())

const emailTemplate = (name, email, phone) => `
Name: ${name}
Email: ${email}
Phone: ${phone}
`

const emailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {user: '', pass: ''},
})

gatsby.prepare({app}, () => {
  app.post('/submit-contact', (req, res, next) => {
    const {name, email, phone} = req.body
    const emailObj = {
      from: '',
      to: '',
      subject: 'Contact Info Submission',
      html: emailTemplate(name, email, phone),
    }
    emailer.sendMail(emailObj, (err, info) => {
      if (err) {
        console.error(`Error sending email: ${err}`)
        res.status(406)
        return
      }
      res.status(200)
    })
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))

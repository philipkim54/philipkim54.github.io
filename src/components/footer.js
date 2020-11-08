import React from 'react'
import { Link } from 'gatsby'

import './style/footer.css'
import headshot from '../../static/images/headshot.jpg'


const Footer = (props) => (
  <div className='footer'>
    <div className='footer-content'>
      <div className='footer-bio'>
        <div className='footer-headshot-wrapper'>
          <img className='footer-headshot' src={headshot} alt='Phil Kim headshot' />
        </div>

        <div className='footer-name-wrapper'>
          <div className='footer-name'>Philip Kim</div>
          <div className='footer-company'>Nest Seekers LLC</div>
        </div>
      </div>

      <div className='footer-contact'>
        footer contact
      </div>

      <div className='footer-social-media'>
        footer social media
      </div>

      <div className='footer-disclaimers'>
        footer disclaimers
      </div>
    </div>
  </div>
)

export default Footer

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
        <div className='footer-email'>
          <i className='fa fa-envelope footer-icon' aria-hidden='true' />
          <a href='mailto:philk@nestseekers.com' target='_blank' rel='noreferrer'>philk@nestseekers.com</a>
        </div>
        <div className='footer-cell'>
          <i className='fa fa-phone fa-lg footer-icon' aria-hidden='true' />
          <a href='tel:917-699-3666'>917.699.3666</a>
        </div>
        <div className='footer-office'>
          <i className='fa fa-building fa-lg footer-icon' aria-hiddren='true' />
          <a href='tel:516-922-2878'>516.922.2878</a>
        </div>
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

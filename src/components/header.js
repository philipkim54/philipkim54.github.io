import React from 'react'
import { Link } from 'gatsby'

import './style/header.css'
import logo from '../../static/assets/phil_kim_logo.jpg'

const LINKS = [
  {href: '/', label: 'Home'},
  {href: '/search', label: 'Search'},
  {href: '/about', label: 'About'},
  {href: '/listings', label: 'Listings'},
  {href: '/sellers', label: 'Sellers'},
  {href: '/buyers', label: 'Buyers'},
]


const Header = ({ page }) => (
  <div className='header'>
    <div className='logo-wrapper'>
      <Link className='home-link' to='/'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
    </div>
    <div className='nav'>
      {LINKS.map((link, i) => (
        <span key={i} className={link.label.toLowerCase() === page ? 'nav-link-wrapper current' : 'nav-link-wrapper'}>
          <Link className='nav-link' to={link.href}>
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  </div>
)

export default Header

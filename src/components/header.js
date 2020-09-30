import React from 'react'
import { Link } from 'gatsby'

import './style/header.css'
import logo from '../../static/images/pklogo.jpg'

const LINKS = [
    { href: '/home', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/about', label: 'About' },
    { href: '/listings', label: 'Listings' },
    { href: '/sellers', label: 'Sellers' },
    { href: '/buyers', label: 'Buyers' },
]

const Header = (props) => (
    <div className='header'>
        <div className='logo-wrapper'>
            <Link className='home-link' to='/'>
                <img className='logo' src={logo} alt='logo' />
            </Link>
        </div>
        <div className='nav'>
            {LINKS.map((page, i) => (
                <span key={i} className='nav-link-wrapper'>
                    <Link className='nav-link' to={page.href}>
                        {page.label}
                    </Link>
                </span>
            ))}
        </div>
    </div>
)

export default Header

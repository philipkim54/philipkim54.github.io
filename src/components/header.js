import React from 'react'
import {Link} from 'gatsby'

import logo from '../../static/assets/phil_kim_logo.jpg'

const LINKS = [
  {href: '/', label: 'Home'},
  {href: '/search', label: 'Search'},
  {href: '/about', label: 'About'},
  {href: '/listings', label: 'Listings'},
  {href: '/sellers', label: 'Sellers'},
  {href: '/buyers', label: 'Buyers'},
]

const Header = ({page}) => (
  <div className='flex items-center justify-center md:justify-between font-quicksand px-6 py-3.5 select-none bg-white'>
    <div className='w-20 lg:w-24 hidden md:inline'>
      <Link to='/'>
        <img className='w-full rounded-md' src={logo} alt='logo' />
      </Link>
    </div>

    <div className='text-xs md:text-base whitespace-nowrap group'>
      {LINKS.map((link, i) => (
        <span
          key={i}
          className={
            link.label.toLowerCase() === page
              ? 'transition-opacity duration-500 border-solid border-b md:border-b-4 border-blue-600 mx-2.5 md:mx-5 capitalize'
              : 'transition-opacity duration-500 mx-2.5 md:mx-5 capitalize'
          }>
          <Link
            className='transition-opacity duration-500 hover:border-solid hover:border-b-4 hover:border-blue-600 group-hover:opacity-25 nav-link'
            to={link.href}>
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  </div>
)

export default Header

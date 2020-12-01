import React from 'react'

import Footer from './footer'
import Header from './header'

const Layout = ({children, page}) => (
  <>
    <Header page={page} />
    <div id='app' className='pb-16 md:pb-24'>
      {children}
    </div>
    <Footer />
  </>
)

export default Layout

import React from 'react'

import Footer from './footer'
import Header from './header'

import './style/layout.css'

const Layout = ({ children, page }) => (
    <>
        <Header page={page} />
        <div id='app'>
            {children}
        </div>
        <Footer />
    </>
)

export default Layout

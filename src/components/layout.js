import React from 'react'
import Header from './header'

import './style/layout.css'

const Layout = ({ children, page }) => (
    <>
        <Header page={page} />
        <div id='app'>
            {children}
        </div>
    </>
)

export default Layout

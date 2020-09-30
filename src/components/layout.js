import React from 'react'
import Header from './header'

import './style/layout.css'

const Layout = ({ children }) => (
    <>
        <Header />
        <div id='app'>
            {children}
        </div>
    </>
)

export default Layout

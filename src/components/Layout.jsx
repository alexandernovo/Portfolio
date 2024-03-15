import React from 'react'
import Navigation from './navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto scroll-smooth'>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

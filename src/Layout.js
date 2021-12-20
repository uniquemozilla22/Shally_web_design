import React from 'react'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'
import Newsletter from './Components/Newsletter/Newsletter'
import Sidebar from './Components/Sidebar/Sidebar'


const Layout = (props) => {
    return (
        <>
            <Navigation />
            <Sidebar />
            {props.children}
            <Newsletter />
            <Footer />
        </>
    )
}


export default Layout
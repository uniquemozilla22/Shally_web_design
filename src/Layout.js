import React from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumb from './Components/BreadCrumb/BreadCrumb'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'
import Newsletter from './Components/Newsletter/Newsletter'
import Sidebar from './Components/Sidebar/Sidebar'


const Layout = (props) => {

    const location = useLocation()

    return (
        <>
            <Navigation />
            <Sidebar />
            {location.pathname === "/" ? null : <BreadCrumb />}
            {props.children}
            <Newsletter />
            <Footer />
        </>
    )
}


export default Layout
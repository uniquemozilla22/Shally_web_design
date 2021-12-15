import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Sidebar from './Components/Sidebar/Sidebar'


const Layout =(props)=>{
return(
    <>
        <Navigation/>
        <Sidebar/>
        {props.children}
    </>
    )
}


export default Layout
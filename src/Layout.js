import React from 'react'
import Navigation from './Components/Navigation/Navigation'


const Layout =(props)=>{
return(
    <>
        <Navigation/>
        {props.children}
    </>
    )
}


export default Layout
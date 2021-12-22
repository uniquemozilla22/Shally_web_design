import React from 'react'
import classes from './contact.module.css'

const Contact = ({ title, number, icon, displaySmall, smaller }) => {
    return (
        <>
            <div className={classes.contact__container + " contact__card " + (displaySmall || smaller ? "" : "d-none d-lg-block")} style={displaySmall ? { margin: "3rem 0" } : null}>
                <div className={classes.contact_title}>
                    <i style={displaySmall ? { fontSize: "2rem", margin: "0 2rem" } : null} className={"fas fa-" + icon}></i>
                    <a href="">
                        <span style={displaySmall ? { fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" } : null} >{title}</span>
                        <span style={displaySmall ? { fontSize: "1.5rem", fontWeight: "normal", margin: "0.5rem 0" } : null} className={classes.detail}>{number}</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact

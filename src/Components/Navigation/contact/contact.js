import React from 'react'
import classes from './contact.module.css'

const Contact = ({ title, number, icon }) => {
    return (
        <>
            <div className={classes.contact__container + " contact__card"}>
                <div className={classes.contact_title}>
                    <i className={"fas fa-" + icon}></i>
                    <a href="">
                        <span>{title}</span>
                        <span className={classes.detail}>{number}</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact

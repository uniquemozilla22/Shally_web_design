import React from 'react'

const Contact = ({title, number,icon}) => {
    return (
        <>
            <div className="contact__container contact__call">
                        <div className="contact-title">
                            <i className={"fas fa-"+icon}></i>
                            <a href="">
                                <span>{title}</span>
                                <span className="detail">{number}</span>
                            </a>
                        </div>
                    </div>
        </>
    )
}

export default Contact

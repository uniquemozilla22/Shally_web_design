import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import Contact from '../Navigation/contact/contact'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact__form_and_details">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="form__container">
                            <h1 className="contact__form_title">
                                Add Comment
                            </h1>
                            <form className="contact__form">
                                <div class="response">
                                    <div class="success">
                                        Email has been sent successfully.
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="name" class="name" placeholder="Name" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" name="email" class="email" placeholder="Email" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea name="message" placeholder="Message" row='4'></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-submit">
                                            <LinkButton link={"./"} name={"Send Now"} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <Contact title="Call" number="+977 9846464" icon="phone" displaySmall />
                        <Contact title="Working Time" number="Monday to Friday" icon="clock" displaySmall />
                        <Contact title="Address" number="Franklin St, Greenpoint" icon="map-marker-alt" displaySmall />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ContactForm

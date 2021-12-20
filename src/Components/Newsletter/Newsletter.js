import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter__section">
            <div className="container">
                <div className="newsletter__container row">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="title_and_link_container">
                            <h1>Join Us <br />and stay tuned!</h1>
                            <a>
                                <i className="fa fa-long-arrow-alt-right"></i>Join Us
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-8 col-lg-8">
                        <div className="form_container container">
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <input placeholder="Name" type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input placeholder="Email" type="email" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input placeholder="Class" type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="text_area_news form-group col-md-12">
                                    <textarea placeholder="Message" className="form-control" rows="10"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter

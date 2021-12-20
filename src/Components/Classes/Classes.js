import React from 'react'
import { Link } from 'react-router-dom'
import './Classes.css'

const Classes = () => {
    return (
        <div className="classes_container">
            <div className="container">
                <div className="row">
                    <div className="col-6 content__container">
                        <h3 className="class__title">Our Clasees </h3>
                        <p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus</p>
                    </div>
                    <div className="col-6 text-right buttons-container">
                        <a className="previous-button" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <i className="fa fa-arrow-left"></i>
                        </a>
                        <a className="next-button" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-12 carousel__container">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active products">
                                    <div className="row">
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item products">
                                    <div className="row">
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <div className="card product__card">
                                                <div className="image_container">
                                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <a className="card_icon_container">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </div>

                                                <div className="card-body">
                                                    <h4 className="card-title product-title">Special title treatment</h4>
                                                    <p className="card-text product_text">Mon - Fri 10 AM - 12 AM</p>

                                                    <div className="card_credentail_holder">
                                                        <h4 className="footer-name">Jhon Doe</h4>
                                                        <h3 className="footer-name">$63</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="class_navigation_container">
                    <Link to="./">
                        <i className="fa fa-long-arrow-alt-right"></i>
                        Classes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Classes

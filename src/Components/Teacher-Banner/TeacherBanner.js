import React from 'react'
import './TeacherBanner.css'
import Modal1 from '../../Assets/modal1.jpg'
import Modal2 from '../../Assets/modal2.jpg'

const TeacherBanner = () => {
    return (
        <div className="teacher-banner">
            <div className="container">
                <div className="banner-title__container">
                    <h2 className="banner-title">Our Awesome<br /> Teachers</h2>
                    <p>Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra, bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit amet</p>
                </div>
                <div className="row teacher-profile__container">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card teacher-card">
                            <div className="teacher-image__container">
                                <img
                                    src={Modal1}
                                    class="card-img-top"
                                    alt="Modal 1"
                                />
                                <div className="card-icon__container">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>

                            <div class="card-body details-container">
                                <h5 class="card-title">Poliana Kerston</h5>
                                <p class="card-text">
                                    English Teacher
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card teacher-card">
                            <div className="teacher-image__container">
                                <img
                                    src={Modal2}
                                    class="card-img-top"
                                    alt="Modal 1"
                                />
                                <div className="card-icon__container">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>

                            <div class="card-body details-container">
                                <h5 class="card-title">Poliana Kerston</h5>
                                <p class="card-text">
                                    English Teacher
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card teacher-card">
                            <div className="teacher-image__container">
                                <img
                                    src={Modal1}
                                    class="card-img-top"
                                    alt="Modal 1"
                                />
                                <div className="card-icon__container">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>

                            <div class="card-body details-container">
                                <h5 class="card-title">Poliana Kerston</h5>
                                <p class="card-text">
                                    English Teacher
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card teacher-card">
                            <div className="teacher-image__container">
                                <img
                                    src={Modal2}
                                    class="card-img-top"
                                    alt="Modal 1"
                                />
                                <div className="card-icon__container">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>

                            <div class="card-body details-container">
                                <h5 class="card-title">Poliana Kerston</h5>
                                <p class="card-text">
                                    English Teacher
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeacherBanner

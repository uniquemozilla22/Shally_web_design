import React from 'react'
import { Link } from 'react-router-dom'
import ClassesCard from '../Classes-Card/ClassesCard'
import LinkButton from '../LinkButton/LinkButton'
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
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item products">
                                    <div className="row">
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                        <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                                            <ClassesCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="class_navigation_container">
                    <LinkButton name="Classes" link="./" />
                </div>
            </div>
        </div>
    )
}

export default Classes

import React from 'react'
import './AboutBanner.css'
import Graduate from '../../Assets/graduate.png'
import Graduate_Blue from '../../Assets/graduate_blue.png'
import Graduate_three from '../../Assets/graduate_three.png'
import Graduate_orange from '../../Assets/oragnge_chemical.png'
import AboutCard from '../About-Card/AboutCard'
import About_Masonry from '../masonry/About_Masonry'


const AboutBanner = () => {
    return (
        <>
        <div className="about-banner container">
            <div classsName="row">
                <div className=" col-12 about-content align-items-center">
                    <div className="about-heading">
                        <h2>Welcome to <span>Shelly </span></h2>
                    </div>
                    <div className="about-subheading">
                        <p>Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus interdum, mauris quis cursus sodales, urn</p>
                    </div>
                </div>
            </div>
            <div className="intro-card-container row">
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <AboutCard image={Graduate_Blue}/>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <AboutCard image={Graduate}/>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <AboutCard image={Graduate_orange}/>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <AboutCard image={Graduate_three}/>             
                </div>

            </div>
            <About_Masonry />
        </div>
        </>
    )
}

export default AboutBanner

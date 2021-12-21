import React from 'react'
import './AboutBanner.css'
import Graduate from '../../Assets/graduate.png'
import Graduate_Blue from '../../Assets/graduate_blue.png'
import Graduate_three from '../../Assets/graduate_three.png'
import Graduate_orange from '../../Assets/oragnge_chemical.png'
import AboutCard from '../About-Card/AboutCard'
import { animated, useSpring } from 'react-spring'


const AboutBanner = () => {


    const useAnimationStyle = (delay) => {
        return useSpring({
            loop: false,
            from: { y: 50, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay
        })
    }
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
                    <animated.div style={useAnimationStyle(0)} className="col-lg-3 col-md-6 col-xs-12" >
                        <AboutCard image={Graduate_Blue} />
                    </animated.div>
                    <animated.div style={useAnimationStyle(200)} className="col-lg-3 col-md-6 col-xs-12">
                        <AboutCard image={Graduate} />
                    </animated.div>
                    <animated.div style={useAnimationStyle(400)} className="col-lg-3 col-md-6 col-xs-12">
                        <AboutCard image={Graduate_orange} />
                    </animated.div>
                    <animated.div style={useAnimationStyle(600)} className="col-lg-3 col-md-6 col-xs-12">
                        <AboutCard image={Graduate_three} />
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner

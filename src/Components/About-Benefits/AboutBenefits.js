import React from 'react'
import AboutCard from '../About-Card/AboutCard'
import LinkButton from '../LinkButton/LinkButton'
import Graduate from '../../Assets/graduate.png'
import Graduate_Blue from '../../Assets/graduate_blue.png'
import Graduate_three from '../../Assets/graduate_three.png'
import Graduate_orange from '../../Assets/oragnge_chemical.png'
import './AboutBenefits.css'
import { animated, useSpring } from 'react-spring'

const AboutBenefits = ({ useAnimationStyle }) => {


    return (
        <div className="about_benefit__section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <animated.div style={useAnimationStyle(600)} className="section__content">
                            <h2 className="intro__title">Our Benefits</h2>
                            <p className="content">Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.</p>
                            <LinkButton link="./" name={"Contacts"} />
                        </animated.div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="benefit_card_container row">
                            <animated.div style={useAnimationStyle(400)} className="col-lg-6 col-md-6 col-sm-12">
                                <AboutCard image={Graduate} />
                            </animated.div>
                            <animated.div style={useAnimationStyle(600)} className="col-lg-6 col-md-6 col-sm-12">
                                <AboutCard image={Graduate_Blue} />
                            </animated.div>
                            <animated.div style={useAnimationStyle(800)} className="col-lg-6 col-md-6 col-sm-12">
                                <AboutCard image={Graduate_orange} />
                            </animated.div>
                            <animated.div style={useAnimationStyle(1000)} className="col-lg-6 col-md-6 col-sm-12">
                                <AboutCard image={Graduate_three} />
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBenefits

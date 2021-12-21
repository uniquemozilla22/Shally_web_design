import React from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import AboutIntroImg from '../../Assets/intro_about_image.png'
import LinkButton from '../LinkButton/LinkButton'
import './AboutIntro.css'

const AboutIntro = ({ useAnimationStyle }) => {


    const zoomIn = useSpring({
        loop: false,
        from: { opacity: 0, scale: 0.2 },
        to: { opacity: 1, scale: 1 }
    })
    return (
        <div className="section_about_introduction">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <animated.div style={useAnimationStyle(400)} className="section__content">
                            <h2 className="intro__title">Welcome to<br />
                                <span> Shelly</span> School</h2>
                            <p className="content">Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.</p>
                            <LinkButton link="./" name="Classes" />
                        </animated.div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-sm-none d-md-block">
                        <animated.div style={zoomIn} className="intro_image_container">
                            <img src={AboutIntroImg} alt="introduction picture" />
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro

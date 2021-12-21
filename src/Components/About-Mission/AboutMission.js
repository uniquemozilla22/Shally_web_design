import React from 'react'
import { animated, useSpring, useSprings } from 'react-spring'
import "./AboutMission.css"
import AboutImage2 from '../../Assets/aboutImage.png'

const AboutMission = () => {
    const zoomIn = useSpring({
        loop: false,
        from: { scale: 0.2 },
        to: { scale: 1 },
        delay: 400,
    })
    return (
        <div className="about_mission__section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <animated.div style={zoomIn} className="image__container">
                            <img src={AboutImage2} alt="About Image 2 "></img>
                        </animated.div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMission

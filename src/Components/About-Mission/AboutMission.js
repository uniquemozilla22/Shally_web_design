import React from 'react'
import { animated, useSpring, useSprings } from 'react-spring'
import "./AboutMission.css"
import AboutImage2 from '../../Assets/aboutImage.png'

const AboutMission = ({ useAnimationStyle }) => {
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <animated.div style={zoomIn} className="image__container">
                            <img src={AboutImage2} alt="About Image 2 "></img>
                        </animated.div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <animated.div style={useAnimationStyle(400)} className="content__wrapper">
                            <h3>About Us</h3>
                            <h2>Our Mission</h2>
                            <p>Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl.</p>
                            <ul className="mission__list">
                                <li>Etiam ante nisl, maximus vitae sem non, dignissim</li>
                                <li>Donec blandit, sapien eu porttitor blandit</li>
                                <li>Sed at urna at massa viverra feugiat non</li>
                            </ul>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMission

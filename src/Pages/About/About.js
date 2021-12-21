import React from 'react'
import { Fade, Slide } from 'react-reveal'
import AboutIntro from '../../Components/About-Intro/AboutIntro'
import AboutMission from '../../Components/About-Mission/AboutMission'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'

const About = () => {
    return (
        <main>
            <Fade cascade bottom>
                <AboutIntro />
            </Fade>
            <Fade cascade bottom>
                <AboutMission />
            </Fade>
        </main>
    )
}

export default About

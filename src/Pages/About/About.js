import React from 'react'
import { Fade, Slide } from 'react-reveal'
import { useSpring } from 'react-spring'
import AboutBenefits from '../../Components/About-Benefits/AboutBenefits'
import AboutIntro from '../../Components/About-Intro/AboutIntro'
import AboutMission from '../../Components/About-Mission/AboutMission'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Classes from '../../Components/Classes/Classes'

const About = () => {

    const useAnimationStyle = (delay) => {
        return useSpring({
            loop: false,
            from: { y: 50, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay
        })
    }

    return (
        <main>
            <Fade cascade bottom>
                <AboutIntro useAnimationStyle={useAnimationStyle} />
            </Fade>
            <Fade cascade bottom>
                <AboutMission useAnimationStyle={useAnimationStyle} />
            </Fade>
            <Fade cascade bottom>
                <AboutBenefits useAnimationStyle={useAnimationStyle} />
            </Fade>
            <Fade>
                <Classes />
            </Fade>
        </main>
    )
}

export default About

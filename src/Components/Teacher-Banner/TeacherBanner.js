import React from 'react'
import './TeacherBanner.css'
import Modal1 from '../../Assets/modal1.jpg'
import Modal2 from '../../Assets/modal2.jpg'
import { animated, useSpring } from 'react-spring'
import { Fade, Slide } from 'react-reveal'
import TeacherCard from '../Teacher-card/TeacherCard'

const TeacherBanner = () => {
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
            <div className="teacher-banner">
                <div className="container">
                    <div className="banner-title__container">
                        <h2 className="banner-title">Our Awesome<br /> Teachers</h2>
                        <p>Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra, bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit amet</p>
                    </div>
                    <div className="row teacher-profile__container">
                        <div className="col-6 col-lg-3 col-md-4 col-sm-6 col-xs-6">
                            <animated.div style={useAnimationStyle(200)} >
                                <TeacherCard imgSource={Modal1} job="English Teacher" name="Presely Dawson" />
                            </animated.div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-4 col-sm-6  col-xs-6">
                            <animated.div style={useAnimationStyle(400)} >
                                <TeacherCard imgSource={Modal2} job="Spanish Teacher" name="Jia Dawson" />
                            </animated.div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-4 col-sm-6  col-xs-6">
                            <animated.div style={useAnimationStyle(600)}  >
                                <TeacherCard imgSource={Modal1} job="French Teacher" name="Kristeen Dawson" />
                            </animated.div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-4 col-sm-6  col-xs-6">
                            <animated.div style={useAnimationStyle(800)} bottom>
                                <TeacherCard imgSource={Modal2} job="Nepali Teacher" name="Ram Kumari" />
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TeacherBanner

import React from 'react'
import { animated, useSpring } from 'react-spring'
import TeacherCard from '../Teacher-card/TeacherCard'
import teacher1 from '../../Assets/modal1.jpg'
import teacher2 from '../../Assets/modal2.jpg'
import './TeacherAll.css'

const TeacherAll = () => {
    const useFadeup = (delay) => useSpring({
        loop: false,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        delay: delay * 100
    })
    return (
        <div className="all_teacher__section">
            <div className="container">
                <div className="row">
                    <animated.div style={useFadeup(1)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Sanjay Shah" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(2)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher2} name="Presely Dawson" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(3)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Sanjay Shah" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(4)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher2} name="Bijaya Lama" job="Job Hunter" />
                    </animated.div>
                    <animated.div style={useFadeup(5)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Presely Dawson" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(6)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher2} name="Sanjay Shah" job="Job Hunter" />
                    </animated.div>
                    <animated.div style={useFadeup(7)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Bijaya Lama" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(8)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher2} name="Sanjay Shah" job="Job Hunter" />
                    </animated.div>
                    <animated.div style={useFadeup(9)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Presely Dawson" job="HR" />
                    </animated.div>
                    <animated.div style={useFadeup(10)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher2} name="Sanjay Shah" job="Job Hunter" />
                    </animated.div>
                    <animated.div style={useFadeup(11)} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TeacherCard imgSource={teacher1} name="Bijaya Lama" job="HR" />
                    </animated.div>
                </div>

            </div>
        </div>
    )
}

export default TeacherAll

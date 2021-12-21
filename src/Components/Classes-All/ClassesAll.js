import React from 'react'
import { animated, useSpring } from 'react-spring'
import ClassesCard from '../Classes-Card/ClassesCard.js'
import './ClassesAll.css'

const ClassesAll = () => {
    const useFadeup = (delay) => useSpring({
        loop: false,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        delay: delay * 100
    })
    return (
        <div className="all_classes_section">
            <div className='container'>
                <div className="row">
                    <animated.div style={useFadeup(1)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(2)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(3)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(4)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(5)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(6)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(7)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(8)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(9)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(10)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(11)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>
                    <animated.div style={useFadeup(12)} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <ClassesCard />
                    </animated.div>

                </div>
            </div>
        </div>
    )
}

export default ClassesAll

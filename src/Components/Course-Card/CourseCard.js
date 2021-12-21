import React from 'react'
import classes from './CourseCard.module.css'
import AvatarIcon from '../../Assets/avatarIcon.png'
import { animated, useSpring } from 'react-spring'

const CourseCard = ({ location, postedBy, name, date, price, delay }) => {

    const slide = useSpring({
        loop: false,
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 },
        delay
    })
    return (
        <animated.div style={slide} className={"card " + classes.background_course_card}>
            <div className={classes.course_card}>
                <div className={classes.course_header + " card-header"}>
                    <div className={classes.course_date_price}>
                        <div className={classes.course_date}>
                            <i className="far fa-calendar-alt"></i>
                            <p>{date}</p>s
                        </div>
                        <div className={classes.course_price}>
                            <h5>{price}</h5>
                        </div>
                    </div>
                </div>
                <div className={classes.card_title_container + " card-body"}>
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className={classes.location_holder + " card-footer"}>
                    <div className={classes.postedBy}>
                        <img src={AvatarIcon} alt="avatar" />
                        <h3>{postedBy}</h3>
                    </div>
                    <div className={classes.locationmarker}>
                        <i className="fas fa-map-marker"></i>
                        <h3>{location}</h3>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}

export default CourseCard

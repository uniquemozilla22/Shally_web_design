import React from 'react'
import classes from './CourseCard.module.css'
import AvatarIcon from '../../Assets/avatarIcon.png'

const CourseCard = ({ location, postedBy, name, date, price }) => {
    return (
        <div className={"card " + classes.background_course_card}>
            <div class={classes.course_card}>
                <div class={classes.course_header + " card-header"}>
                    <div className={classes.course_date_price}>
                        <div className={classes.course_date}>
                            <i className="far fa-calendar-alt"></i>
                            <p>{date}</p>
                        </div>
                        <div className={classes.course_price}>
                            <h5>{price}</h5>
                        </div>
                    </div>
                </div>
                <div class={classes.card_title_container + " card-body"}>
                    <h5 class="card-title">{name}</h5>
                </div>
                <div class={classes.location_holder + " card-footer"}>
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
        </div>
    )
}

export default CourseCard

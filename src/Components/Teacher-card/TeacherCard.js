import React from 'react'
import classes from './TeacherCard.module.css'
const TeacherCard = ({ imgSource, name, job }) => {
    return (
        <div class={classes.teacher_card + " card"}>
            <div className={classes.teacher_image__container}>
                <img
                    src={imgSource}
                    class="card-img-top"
                    alt="Modal 1"
                />
                <div className={classes.card_icon__container}>
                    <i className="fas fa-plus"></i>
                </div>
            </div>
            <div class={classes.details_container + " card-body details-container"}>
                <h5 class="card-title">{name}</h5>
                <p class="card-text">
                    {job}
                </p>
            </div>
        </div>
    )
}

export default TeacherCard

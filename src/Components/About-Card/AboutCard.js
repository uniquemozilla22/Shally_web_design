import React from 'react'
import classes from './AboutCard.module.css'
const AboutCard = (props) => {
    return (
        <div className={classes.about_card + " card"}>
            <div className="card-body">
                <img
                    src={props.image}
                    className={classes.card_about_image}
                    alt="Sunset Over the Sea"
                />
                <h5 className="card-title">Awesome Teachers</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </p>
            </div>
        </div>
    )
}

export default AboutCard

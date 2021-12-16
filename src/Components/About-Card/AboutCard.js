import React from 'react'
import classes from './AboutCard.module.css'
const AboutCard = (props) => {
    return (
        <div class="card">
                        <div class="card-body">
                        <img
                            src={props.image}
                            class={classes.card_about_image}
                            alt="Sunset Over the Sea"
                        />
                        <h5 class="card-title">Awesome Teachers</h5>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>
                        </div>
                    </div>
    )
}

export default AboutCard

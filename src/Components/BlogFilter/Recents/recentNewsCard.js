import React from 'react'
import classes from './recentNewsCard.module.css'


const recentNewsCard = ({ image, title, date }) => {
    return (
        <div class={classes.recent_news__card + " card"}>
            <div class="row g-0 align-items-center">
                <div class="col-4 col-md-4 col-sm-6 col-xs-6">
                    <img
                        src={image}
                        alt={title}
                        class="img-fluid rounded-start"
                        hwight="100%"
                    />
                </div>
                <div class="col-8 col-md-8  col-sm-6 col-xs-6">
                    <div class="card-body">
                        <h6 class="card-title">{title}</h6>
                        <p class="card-text">
                            <small class="text-muted">{date}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default recentNewsCard

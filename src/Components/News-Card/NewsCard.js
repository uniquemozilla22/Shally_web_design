import React from 'react'
import { animated, useSpring } from 'react-spring'
import classes from './NewsCard.module.css'

const NewsCard = ({ date, title, description, postedBy, tag, lang, img, delay }) => {
    const useAnimationStyle = () => {
        return useSpring({
            loop: false,
            from: { y: 50, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay
        })
    }
    return (
        <animated.div style={useAnimationStyle()} className={"card " + classes.news_card__container}>
            <div className={classes.image_background + " bg-image hover-overlay"} data-mdb-ripple-color="dark">
                <div className={classes.image_container}>
                    <img
                        src={img}
                        className="img-fluid"
                    />
                    <span className={classes.title_image}>{lang}</span>
                </div>

            </div>
            <div className="card-body">
                <div className={classes.news_card__details}>
                    <p className={classes.news_date}>{date}</p>
                    <p className={classes.news_postedBy}> By {postedBy}</p>
                    <p className={classes.news_tag}><i className="fa fa-tags"></i> {tag.join(" , ")}</p>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="#!" className={classes.linking_tag}> Read More  <i class="fas fa-arrow-right"></i></a>
            </div>
        </animated.div>
    )
}

export default NewsCard

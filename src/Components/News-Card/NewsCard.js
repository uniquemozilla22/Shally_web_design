import React from 'react'
import { animated, useSpring } from 'react-spring'
import Carousel from '../BlogComponent/Carousel/Carousel'
import classes from './NewsCard.module.css'
import Video from '../BlogComponent/Video/Video'

const NewsCard = ({ date, title, description, postedBy, tag, lang, img, delay, width, carousel, video }) => {
    const useAnimationStyle = () => {
        return useSpring({
            loop: false,
            from: { y: 50, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: delay * 100
        })
    }
    return (
        <animated.div style={useAnimationStyle()} className={"card " + classes.news_card__container} >
            <div className={classes.image_background + " bg-image hover-overlay"} data-mdb-ripple-color="dark">
                <div className={classes.image_container}>
                    {img && !carousel ? <img
                        src={img}
                        className="img-fluid"
                    /> : null}
                    {carousel ? <Carousel img={img} /> : null}
                    {video ? <Video source={video} /> : null}
                    <span className={classes.title_image}>{lang}</span>
                </div>

            </div>
            <div className="card-body">
                <div className={classes.news_card__details}>
                    <p className={classes.news_date} style={width ? { fontSize: "1.2rem" } : null}>{date}</p>
                    <p className={classes.news_postedBy} style={width ? { fontSize: "1.2rem" } : null}> By {postedBy}</p>
                    <p className={classes.news_tag} style={width ? { fontSize: "1.2rem" } : null}><i className="fa fa-tags"></i> {tag.join(" , ")}</p>
                </div>
                <h5 className="card-title" style={width ? { fontSize: "2rem" } : null}>{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="#!" className={classes.linking_tag} style={width ? { fontSize: "1.2rem" } : null}> Read More  <i class="fas fa-arrow-right"></i></a>
            </div>
        </animated.div >
    )
}

export default NewsCard

import React from 'react'
import RecentNewsCard from './recentNewsCard'
import classes from './Recents.module.css'
import image1 from '../../../Assets/news1.jpg'
import image2 from '../../../Assets/news2.jpg'
import image3 from '../../../Assets/news3.jpg'
const Recents = () => {
    return (
        <div className={classes.recent_posts__container}>
            <h3 className={classes.widget_title}>Latest News</h3>
            <ul className={classes.recent_newscard__container + " container "} >
                <li><RecentNewsCard image={image1} title="This is the Latest Post" date="2021/12/21" /></li>
                <li><RecentNewsCard image={image2} title="This is the greatest website" date="2021/12/21" /></li>
                <li><RecentNewsCard image={image3} title="I am Amazed by the design - says Unique" date="2021/12/21" /></li>
            </ul>
        </div>
    )
}

export default Recents

import React from 'react'
import classes from './Tags.module.css'
import Tagscard from './tagCard'

const Tags = () => {
    return (
        <div className={classes.blog_tags__container}>
            <h3 className={classes.widget_title}>Tags</h3>
            <ul className={classes.tagsCard__container + " container "} >
                <li><Tagscard title="Nepali" /></li>
                <li><Tagscard title="English" /></li>
                <li><Tagscard title="Spanish" /></li>
                <li><Tagscard title="French" /></li>
                <li><Tagscard title="Portugese" /></li>
                <li><Tagscard title="German" /></li>
            </ul>
        </div>
    )
}

export default Tags

import React from 'react'
import classes from './Categories.module.css'
const Categories = () => {
    return (
        <div className={classes.blog_categories__filter}>
            <h3 class={classes.widget_title}>Categories</h3>
            <ul className={classes.blog__category__listings}>
                <li><a href="#" title="">Teachers</a> <span>45</span></li>
                <li><a href="#" title="">School News</a> <span>13</span></li>
                <li><a href="#" title="">Lessons</a> <span>6</span></li>
                <li><a href="#" title="">Shelly</a> <span>89</span></li>
            </ul>
        </div>
    )
}

export default Categories
 
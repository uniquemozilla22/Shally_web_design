import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

const LinkButton = ({ link, name }) => {
    return (
        <Link to={link} className={classes.linkbutton}>
            <i className='fa fa-long-arrow-alt-right'></i>
            {name}
        </Link>
    )
}

export default LinkButton

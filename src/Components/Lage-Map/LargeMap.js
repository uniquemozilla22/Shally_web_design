import React from 'react'
import classes from './LargeMap.module.css'

const LargeMap = () => {
    return (
        <div className={classes.large_contact__map}>
            <div className="container">
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=900&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div >
    )
}

export default LargeMap

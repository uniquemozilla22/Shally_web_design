import React from 'react'
import { Link } from 'react-router-dom'

const Social = ({icon}) => {
    return (
        <>
            <Link className="social_link" to="./">
                <i className={"fab fa-"+icon}></i>
             </Link>
        </>
    )
}

export default Social

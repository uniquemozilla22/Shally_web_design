import React from 'react'
import { Link } from 'react-router-dom'

const tagCard = ({ title }) => {
    return (
        <Link to={"./" + title.toLowerCase()}
            className="btn btn-outline-dark btn-rounded my-1"
            data-mdb-ripple-color="orange"
        >
            {title}
        </Link>
    )
}

export default tagCard

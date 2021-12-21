import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './BreadCrumb.module.css'

const BreadCrumb = () => {
    const location = useLocation()
    const [pageName, setPageName] = useState(location.pathname.split("/"))
    useEffect(() => {
        setPageName(location.pathname.split("/"))
    }, [pageName])
    return (
        <div className={classes.section_breadcrumb}>
            <div className="container">
                <div className="col-12">
                    <h1 className={classes.BreadCrumb_title}>{pageName[1]}</h1>
                    <ul className={classes.BreadCrumb_navigation}>
                        {pageName.map((list) => list !== "" ? <li className="list">
                            <Link to={"./"}>{list}</Link>
                        </li> : <li className={classes.home + " list"}>
                            <Link to={"../"}>Home</Link><i className="fa fa-chevron-right"></i>
                        </li>)}
                    </ul>
                </div>
            </div>
            <h1 className={classes.title_background}>Shelly</h1>
        </div >
    )
}

export default BreadCrumb

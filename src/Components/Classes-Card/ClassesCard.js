import React from 'react'
import classes from './ClassesCard.module.css'
const ClassesCard = () => {
    return (
        <div className={"card " + classes.product__card}>
            <div className={classes.image_container}>
                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                <a className={classes.card_icon_container}>
                    <i className="fa fa-shopping-cart"></i>
                </a>
            </div>

            <div className="card-body">
                <h4 className={"card-title " + classes.product_title}>Special title treatment</h4>
                <p className={"card-text " + classes.product_text}>Mon - Fri 10 AM - 12 AM</p>

                <div className={classes.card_credentail_holder}>
                    <h4 className="footer-name">Jhon Doe</h4>
                    <h3 className="footer-name">$63</h3>
                </div>
            </div>

        </div>
    )
}

export default ClassesCard

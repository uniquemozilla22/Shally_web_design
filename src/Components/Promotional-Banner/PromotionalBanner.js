import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import './PromotionalBanner.css'

const PromotionalBanner = () => {
    return (
        <div className="promotional_banner__section">
            <div className="container banner__container">
                <div className="content__container">
                    <span>Try Now</span>
                    <h1>Start Investing In You</h1>
                </div>
                <LinkButton link="./" name="Classes" />
            </div>
        </div>
    )
}

export default PromotionalBanner

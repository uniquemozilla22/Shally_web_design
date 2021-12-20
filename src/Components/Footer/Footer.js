import React from 'react'
import './Footer.css'
import LogoFooter from '../../Assets/logo__footer.png'
import Contact from '../Navigation/contact/contact'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer__section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="introduction__container">
                            <div className="footer_logo">
                                <img src={LogoFooter} alt="Shelly" height="60px" />
                            </div>
                            <div className="footer_content">
                                <p>Vivamus porta efficitur nibh nec convallis. Vestibulum egestas eleifend justo. Ut tellus ipsum, accumsan</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer_address">
                            <Contact title="Call" number="+977 9846464" icon="phone" />
                            <Contact title="Working Time" number="Monday to Friday" icon="clock" />
                            <Contact title="Address" number="Franklin St, Greenpoint" icon="map-marker-alt" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="quick_links_container">
                            <h5 className="link_title">Quick Links</h5>
                            <Link to="./">About Us</Link>
                            <Link to="./">Our Classes</Link>
                            <Link to="./">School Teachers</Link>
                            <Link to="./">Recent Events</Link>
                            <Link to="./">Our News</Link>
                            <Link to="./">Schedule</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div class="widget widget-iframe">
                            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

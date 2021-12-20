import React from 'react'
import { useDispatch } from 'react-redux'
import Logo from '../../Assets/cropped-logo-shelly.png.webp'
import ToggleSidebar from '../../Redux/actions/modal/Sidebar/Sidebar'
import Bar from './Bar/Bar'
import Contact from './contact/contact'
import './Navigation.css'

const Navigation = () => {
    const dispatch = useDispatch();
    return (
        <nav className="container">
            <div className="navigation-bar">
                <div className="navigation_logo">
                    <img src={Logo} alt="Logo" height={"60px"} />
                    <span className="title">
                        Shelly
                    </span>
                </div>
                <div className="navigation_contact">
                    <Contact title="Call" number="+977 9846464" icon="phone" />
                    <Contact title="Working Time" number="Monday to Friday" icon="clock" />
                    <Contact title="Address" number="Franklin St, Greenpoint" icon="map-marker-alt" />
                    <div className="sidebar__toggler" onClick={() => dispatch(ToggleSidebar)}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
            <Bar />

        </nav>
    )
}

export default Navigation

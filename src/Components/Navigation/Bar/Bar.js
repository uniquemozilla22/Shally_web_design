import React from 'react'
import { NavLink } from 'react-router-dom'
import Social from '../Social/Social'
import './Bar.css'

const Bar = () => {
    return (
        <div className="navigation__bar__items">
                <ul className="navigation__items">
                    <li className="items">
                        <NavLink to="./"  activeClassName="selected">Home</NavLink>
                    </li>
                    <li className="items">
                        <NavLink to="./about" activeClassName="selected">About</NavLink>
                    </li>
                    <li className="items">
                        <NavLink to="./classes" activeClassName="selected">Classes</NavLink>
                    </li>
                    <li className="items">
                        <NavLink to="./teachers" activeClassName="selected">Teachers</NavLink>
                    </li>
                    <li className="items">
                        <NavLink to="./blog" activeClassName="selected">Blog</NavLink>
                    </li>
                    <li className="items">
                        <NavLink to="./contacts" activeClassName="selected">Contacts</NavLink>
                    </li>
                </ul>
                <div className="navigation__item__contact">
                    <Social icon="facebook-f"/>
                    <Social icon="linkedin-in"/>
                    <Social icon="instagram"/>
                </div>
            </div>
    )
}

export default Bar

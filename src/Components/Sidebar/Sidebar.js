import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [state , dispatch] = useSelector()
    return (
        <section className="section__sidebar">
            <div className="section__sidebar__container">
                <div className="sidebar_close">
                <i className="fas fa-times fa-2x"></i>
                </div>
                <ul class="sidebar__listing list-group list-group-flush">
                    <li className="items list-group-item">
                        <NavLink to="./"  activeClassName="selected">Home</NavLink>
                    </li>
                    <li className="items list-group-item">
                        <NavLink to="./about" activeClassName="selected">About</NavLink>
                    </li>
                    <li className="items list-group-item">
                        <NavLink to="./classes" activeClassName="selected">Classes</NavLink>
                    </li>
                    <li className="items list-group-item">
                        <NavLink to="./teachers" activeClassName="selected">Teachers</NavLink>
                    </li>
                    <li className="items list-group-item">
                        <NavLink to="./blog" activeClassName="selected">Blog</NavLink>
                    </li>
                    <li className="items list-group-item">
                        <NavLink to="./contacts" activeClassName="selected">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar

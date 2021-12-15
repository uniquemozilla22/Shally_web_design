import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [isSidebarActive,setSidebarActive] =useState(true)

    const dispatch =useDispatch()


    const sidebarHandler =(e)=>{
        const isSidebarClicked = e.target.classList.contains("section__sidebar")
        if(isSidebarClicked){
            setSidebarActive(!isSidebarActive)
        }
    }

    return (
        <section className={"section__sidebar "+isSidebarActive?"section__hide__sidebar":""} onClick={(e)=>sidebarHandler(e)}>
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

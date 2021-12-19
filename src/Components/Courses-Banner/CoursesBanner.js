import React from 'react'
import './CoursesBanner.css'
import courseImage from '../../Assets/courseimage.png'
import CourseCard from '../Course-Card/CourseCard'

const CoursesBanner = () => {
    return (
        <div className="courses-banner__section">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content-container">
                            <h1 className="course-title">Find Your Courses</h1>
                            <p>ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit</p>
                        </div>
                        <div className="image-container d-none d-lg-block ">
                            <img src={courseImage} alt="course Image" />
                        </div>
                    </div>
                    <div className="col-md-6 course_card_container">
                        <CourseCard  location="43 castle road 517 district" postedBy="Amanda Kern" name="Environment Conference" date=" 29/07/202011AM to 15PM" price="Free"/>
                        <CourseCard  location="43 castle road 517 district" postedBy="Amanda Kern" name="Environment Conference" date=" 29/07/202011AM to 15PM" price="Free"/>
                        <CourseCard  location="43 castle road 517 district" postedBy="Amanda Kern" name="Environment Conference" date=" 29/07/202011AM to 15PM" price="Free"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesBanner

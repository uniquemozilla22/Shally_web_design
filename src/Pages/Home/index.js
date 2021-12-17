import React from 'react'
import AboutBanner from '../../Components/About-Banner/AboutBanner'
import Banner from '../../Components/Banner/Banner'
import Classes from '../../Components/Classes/Classes'
import CoursesBanner from '../../Components/Courses-Banner/CoursesBanner'
import TeacherBanner from '../../Components/Teacher-Banner/TeacherBanner'
import Layout from '../../Layout'

const Home = () => {
    return (
        <main>
            <Banner/>
            <AboutBanner/>
            <Classes/>
            <TeacherBanner/>
            <CoursesBanner/>
        </main>
    )
}

export default Home

import React from 'react'
import { Fade, Slide } from 'react-reveal'
import AboutBanner from '../../Components/About-Banner/AboutBanner'
import Banner from '../../Components/Banner/Banner'
import Classes from '../../Components/Classes/Classes'
import CoursesBanner from '../../Components/Courses-Banner/CoursesBanner'
import Newsletter from '../../Components/Newsletter/Newsletter'
import RecentNews from '../../Components/Recent-News/RecentNews'
import TeacherBanner from '../../Components/Teacher-Banner/TeacherBanner'
import Layout from '../../Layout'

const Home = () => {
    return (
        <main>
            <Banner />
            <Fade cascade>
                <AboutBanner />
            </Fade>
            <Fade cascade>
                <Classes />

            </Fade>
            <Fade cascade>
                <TeacherBanner />
            </Fade>
            <Fade cascade >
                <CoursesBanner />
            </Fade>
            <Fade cascade>
                <RecentNews />
            </Fade>
        </main>
    )
}

export default Home

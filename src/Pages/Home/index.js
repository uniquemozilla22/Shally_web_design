import React from 'react'
import AboutBanner from '../../Components/About-Banner/AboutBanner'
import Banner from '../../Components/Banner/Banner'
import Classes from '../../Components/Classes/Classes'
import Layout from '../../Layout'

const Home = () => {
    return (
        <main>
            <Banner/>
            <AboutBanner/>
            <Classes/>
        </main>
    )
}

export default Home

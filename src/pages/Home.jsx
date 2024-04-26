import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <Layout>
            <Banner />
            <About />
            <Timeline />
            <Projects />
        </Layout>
    )
}

export default Home

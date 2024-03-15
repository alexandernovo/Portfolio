import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/About'
import Timeline from '../components/Timeline'

const Home = () => {
    return (
        <Layout>
            <Banner />
            <About />
            <Timeline />
        </Layout>
    )
}

export default Home

import React from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import Main from './Main'
import Contact from '../Screen/Contact'
import About from '../Screen/About'
import Butoon from '../Layout/Butoon'
import Service from '../Screen/Service'
import Login from '../Auth/Login';
const Home = () => {
    return (
        <div id='home'>
            
            <Header/>
            <Main />
            <Container/>
            <Contact />
            <About />
            <Service />
            <Butoon />
            <Footer/>
        </div>
    )
}

export default Home

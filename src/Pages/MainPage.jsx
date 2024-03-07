import React from 'react'
import Navbar from '../Components/navbar'
import Home from '../Components/home'
// import Footer from '../components/Footer'
// import About from '../components/About'


export default function MainPage() {
    return (
        <React.Fragment>
            <Navbar />
            <section id="Home" >
                <Home />
            </section>
            {/* <section id="About" >
                <About />
            </section>
            <Footer /> */}
        </React.Fragment>
    )
}

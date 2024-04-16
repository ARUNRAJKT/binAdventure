import React from 'react'
import Navbar from '../Components/navbar'
import Home from '../Components/home'
import "./MainPage.css"

export default function MainPage() {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
        </React.Fragment>
    )
}

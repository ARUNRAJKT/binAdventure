import React, { useEffect, useState } from 'react'
import Navbar from '../Components/navbar'
import Home from '../Components/home'
import "./MainPage.css"
import Loader from '../Components/loader'
export default function MainPage() {
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },5000)
    },[])
    if(isLoading){
        return<Loader/>
      }
    return (
        <React.Fragment>
            
            <Navbar />
            <Home />
        </React.Fragment>
    )
}

import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "../Layouts/Layout.scss"

function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default MainLayout
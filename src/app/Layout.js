import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='contenedorLayout'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
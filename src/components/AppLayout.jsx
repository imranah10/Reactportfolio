import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Call from './Call'
import Footer from './Footer'

// import Hero from './Hero'

function AppLayout() {
 
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Call />
      <Footer />
    </div>
  )
}

export default AppLayout

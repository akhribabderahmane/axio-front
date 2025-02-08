import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Navbar from './Navbar'
const Layout = () => {
  return (
    <div className=" flex flex-col lg:flex-row min-w-full ">
      <div className=" ">
        <SideBar />
      </div>
      <div className=" w-full">
        <Navbar />
        <div className=' px-10 py-8 bg-axio-white '>
        <Outlet />
        </div>
      </div>
    </div>
  )

}

export default Layout

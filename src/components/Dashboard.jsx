import React from 'react'
import Sider from './Sider'
import Header from "./Header"
import Footer from "./Footer"
import Project from "./Project"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1">
            <Sider/>
        </div>
        <div className="col-span-3">
            <Header/>
            <Project/>
            <Footer/>

        </div>
    </div>
  )
}

export default Dashboard
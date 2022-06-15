import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
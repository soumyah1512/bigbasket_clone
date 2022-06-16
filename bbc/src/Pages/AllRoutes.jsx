import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Vegitables from './Vegitables'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/vegitables" element={<Vegitables/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
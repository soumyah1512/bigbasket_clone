import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Vegitables from './Vegitables'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fruits-and-vegitables" element={<Vegitables/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={
                <PrivateRoute>
                    <Cart/>
                </PrivateRoute>
            }/>
        </Routes>
    </>
  )
}

export default AllRoutes
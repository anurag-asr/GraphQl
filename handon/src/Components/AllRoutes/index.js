import React from 'react'
import {Routes,Route} from "react-router-dom"
import Movies from '../../Pages/Movies'
import Persons from '../../Pages/Persons'
import Home from '../../Pages/Home'
import SingleMovieDetails from '../../Pages/SingleMovieDetails'
import Login from '../../Pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourite' element={<Movies/>}/>
      <Route path='/person' element={<Persons/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/favourite/:id' element={<SingleMovieDetails/>}/>
    </Routes>
  )
}

export default AllRoutes

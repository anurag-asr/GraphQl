import React from 'react'
import {Routes,Route} from "react-router-dom"
import Movies from '../../Pages/Movies'
import Persons from '../../Pages/Persons'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/favourite' element={<Movies/>}/>
      <Route path='/person' element={<Persons/>}/>
    </Routes>
  )
}

export default AllRoutes

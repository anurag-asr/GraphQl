import React from 'react'
import {Routes,Route} from "react-router-dom"
// import Home from '../Pages/Home'
import Category from '../Pages/Category'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Category/>}/>
          <Route path='/:categoryId' element={<Category/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

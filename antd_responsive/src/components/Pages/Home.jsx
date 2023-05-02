import React from 'react'
import Hero from '../home/hero'
import RecentProducts from '../home/recentProduct'
import Information from '../home/information'
import ProductCategories from '../home/productCategories'



const Home = () => {
  return (
    <div className='container'>
      <Hero/>
      <RecentProducts/>
      <Information/>
      <ProductCategories/>
     
    </div>
  )
}

export default Home

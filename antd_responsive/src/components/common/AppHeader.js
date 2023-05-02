import React from 'react'
import {
  MobileOutlined,
  MailOutlined, 
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  UserOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className='container'>
      {/* topbar */}
       <div className='topBar'>
          <div className='contactInfo'>
            <ul>
                <li><a href='tel:07450223367'><span><MobileOutlined/> 07450223367</span></a></li>
                <li><a href='mailto:contact@agency.co.uk'><span><MailOutlined />contact@grocery.co.uk</span></a></li>
            </ul>
          </div>
          <div className='otherInfo'>
            <ul className='socialMedia'>
              <li><a href='https://wwww.facebook.com'><FacebookFilled/></a></li>
              <li><a href='https://www.twitter.com'><TwitterOutlined /></a></li>
              <li><a href='https://www.instagram.com'><InstagramOutlined /></a></li>
            </ul>
            <button><UserOutlined /> My Account</button>
          </div>
       </div>
       {/* header */}
       <div className='header separator'>
         <div className='logo'>Grocery</div>
         <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>
         </nav>
       </div>
    </div>
  )
}

export default AppHeader

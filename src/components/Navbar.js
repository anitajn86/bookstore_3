import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CustomizedBadges from './Cart'
//import bookclublogo from '../images/bookclublogo' 

const Navbar = () => {
  return (
    <div className='app-navbar'>

      <div className='logo'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBbm1zRcH2SogzDpAC0nia4uvdbV5st78lQ&s' alt='logo' />
      </div>
      {/* <div className='title'>AFRICA BOOK CLUB</div> */}

      <div className='links'>
        <div className='link1'><Link to='/'>Home</Link></div>
        <div className='link2'><Link to='/login'>Login</Link></div>
        <div className='link3'><Link to='/admin'>Admin</Link></div>
        <div className='link4'><Link to='/settings'>Settings</Link></div>
      </div>

      <div className='cart'>
        <CustomizedBadges />
      </div>

    </div>
  )
}
export default Navbar

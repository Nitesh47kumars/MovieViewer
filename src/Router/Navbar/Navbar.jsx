import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import './NavbarMedia.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>

      <header className='navbar-header'>
        <h1><NavLink>MY APP</NavLink></h1>
      </header>

      <ul className='navbar-links'>
        <li className='navbar-link'><NavLink to={'/'} >Home</NavLink></li>
        <li className='navbar-link'><NavLink to={'/movies'} >Movies</NavLink></li>
        <li className='navbar-link'><NavLink to={'/contact'} >Contact</NavLink></li>
      </ul>
      
    </div>
  )
}

export default Navbar

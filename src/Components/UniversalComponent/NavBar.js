import React from 'react'
import { NavLink  } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar-Container'>
        <div id='logo'>
            <NavLink className='footLink'>
                <h3>Dine-On</h3>
            </NavLink>
        </div>
        <div className='NavigationsBar'>
        <li type = 'none'>
            <NavLink className='footLink'>Home</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink'>Shop</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink'>Blog</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink'>about</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink'>Contact</NavLink >
        </li>
        </div>
    </div>
  )
}

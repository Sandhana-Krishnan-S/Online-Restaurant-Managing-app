import React from 'react'
import { NavLink  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footerDiv'>
        <div className = 'col1'>
            <div className='row1'>
                <h3>Dine-On</h3>
            </div>
            <div className='row2'>
                <p>Get groovy with Dine On! Menu mischief, spot snagging, and flavor explosions await. Let the tasty trip begin! 🍔🎉</p>
            </div>
        </div>
        <div className='col2'>
            <div className='Navigations'>
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
            <div className='NavLinks'>    
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className='LogoLink' />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='LogoLink' />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='LogoLink' />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='LogoLink' />
                </a>
            </div>
        </div>
    </div>
  )
}

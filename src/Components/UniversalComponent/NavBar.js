import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../UserContext';

export default function NavBar() {
    const { isLogedin , handleLogOut } = useContext(Context);
    const Navigate = useNavigate()
    const LogOut = () => {
        handleLogOut();
        Navigate('/login');
    }

  return (
    <div className='NavBar-Container'>
        <div id='logo'>
            <NavLink to='/' className='footLink'>
                <h3>Dine-On</h3>
            </NavLink>
        </div>
        <div className='NavigationsBar'>
        <li type = 'none'>
            <NavLink to='/' className='footLink'>Home</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink' to= '/shop'>Shop</NavLink >
        </li>
        <li type = 'none'>
            <NavLink to='/blog' className='footLink'>Blog</NavLink >
        </li>
        <li type = 'none'>
            <NavLink to='/about' className='footLink'>about</NavLink >
        </li>
        <li type = 'none'>
            <NavLink className='footLink'>Contact</NavLink >
        </li>
        <li type = 'none'>
            <div className='LoginSignup'>
                { isLogedin ? (
                        <button className='logbtn' onClick={LogOut}>
                        <NavLink to='/login'>
                            <p className='whitePara'>Logout</p>
                        </NavLink>
                    </button>
                ) : (
                       <div className='LoginSignup'>
                         <button className='logbtn'>
                            <NavLink to='/login'>
                                <p className='whitePara'>Login</p>
                            </NavLink>
                        </button>
                       </div>
                    )
                }
            </div>
        </li>
        </div>
    </div>
  )
}

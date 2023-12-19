import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../UserContext';

export default function NavBar() {
    const { UserName, isLogedin , handleLogOut } = useContext(Context);
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
        <li type = 'none'>
            <div>
                { isLogedin ? (
                        <h3 onClick={LogOut} style={{
                            margin : '0px' ,
                            cursor : 'pointer'
                        }}>{ UserName }</h3>
                ) : (
                       <div style={{
                        textAlign : 'center',
                       }}>
                         <button className='btn'>
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

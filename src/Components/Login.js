import { useState , useContext } from "react";
import React from 'react';
import loginCover from '../assets/logCover.png'
import { NavLink  , useNavigate } from "react-router-dom";
import { Context } from './UserContext';

export default function Login() {

  const { signinHandler } = useContext(Context);

  const Navigate = useNavigate()
  const [Username , setUsername] = useState('');
  const [Password , setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  function validate() {
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(Username);
    if(validate()) {
      signinHandler(Username);
      Navigate('/');
    }
    else {
      //handle err
    }
  }

  const checkboxHandler = () => {
    setFlag(!flag);
  };

  return (  
    <div className="unscrollable-container">
      <div className="formStyle">
        <div className="form">
          <h2>Hey, </h2>
          <h2>Welcome Back To DineOn</h2>
          <p id="heading">We are very happy to see you back!</p>
            <form onSubmit={handleSubmit}>
              <label>Username : </label>
              <input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} required placeholder="Enter your Username" className="inputbox" />
              <label>Password : </label>
              <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" className="inputbox" />
              <div className="checkbox-btn">
                <input type="checkbox" onClick={checkboxHandler} className="check" /> 
                <p className="terms">By signing up you are agree to our Term of Use and Privacy Policy.</p>
              </div>
              <input type="submit" disabled = {!flag} className="submit-btn" />
            </form>
            <button id="buttonOnLogin">
              <NavLink   to='/signup'>
                <span className="color">Don’t have an account? <span>Signup Here</span></span>
              </NavLink  >
              
              </button>
        </div>
        <div className="imgContainer">
          <img src = {loginCover} alt="no img" className="cover" />
        </div>
      </div>
    </div>
  )
}

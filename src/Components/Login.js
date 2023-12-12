import { useState } from "react";
import React from 'react';
import loginCover from '../assets/logCover.png'

export default function Login(props) {
  const handleClick = () => {
    props.switchPage('SignUp');
  };

  const [Email , setEmail] = useState("");
  const [Password , setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Email);
  }

  const checkboxHandler = () => {
    setFlag(!flag);
  };

  return (  
    <div className="formStyle">
      <div className="form">
        <h2>Hey, </h2>
        <h2>Welcome Back To DineOn</h2>
        <p id="heading">We are very happy to see you back!</p>
          <form onSubmit={handleSubmit}>
            <label>Email : </label>
            <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} className="inputbox" />
            <label>Password : </label>
            <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} className="inputbox" />
            <div className="checkbox-btn">
              <input type="checkbox" onClick={checkboxHandler} className="check" /> 
              <p className="terms">By signing up you are agree to our Term of Use and Privacy Policy.</p>
            </div>
            <input type="submit" disabled = {!flag} className="submit-btn" />
          </form>
          <button onClick= {handleClick}>Don’t have an account? <span>Signup Here</span></button>
      </div>
      <div className="imgContainer">
        <img src = {loginCover} alt="no img" className="cover" />
      </div>
    </div>
  )
}

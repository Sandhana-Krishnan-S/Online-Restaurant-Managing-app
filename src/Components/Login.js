import { useState } from "react";
import React from 'react';
import loginCover from '../assets/loginCover.png';

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
    <div>
      <div>
        <h2>Hey, </h2>
        <h2>Welcome Back To DineOn</h2>
        <p>We are very happy to see you back!</p>
          <form onSubmit={handleSubmit}>
            <label>Email : </label>
            <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} />
            <label>Password : </label>
            <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} />
            <div>
              <input type="checkbox" onClick={checkboxHandler} /> 
              <p>By signing up you are agree to our Term of Use and Privacy Policy.</p>
            </div>
            <input type="submit" disabled = {!flag} />
          </form>
          <button onClick= {handleClick}>Don’t have an account? <span>Signup Here</span></button>
      </div>
      <div>
        <img src = {loginCover} alt="no img" />
      </div>
    </div>
  )
}

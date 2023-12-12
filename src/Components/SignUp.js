import { useState } from "react";
import React from 'react'
import signUpCover from '../assets/signUpCover.png'

export default function SignUp(props) {
  const handleClick = () => {
    props.switchPage('login');
  };
  const [Username , setUsername] = useState('');
  const [Email , setEmail] = useState('');
  const [Password , setPassword] = useState('');
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
      <h2>Welcome To DineOn</h2>
      <p>Create Account To enter food heaven</p>
        <form onSubmit={handleSubmit} >
          <h3>Login</h3>
          <label>Username : </label>
          <input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} />
          <label>Email : </label>
          <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} />
          <label>Password : </label>
          <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} />
          <input type="submit" />
          <div>
              <input type="checkbox" onClick={checkboxHandler} /> 
              <p>By signing up you are agree to our Term of Use and Privacy Policy.</p>
            </div>
            <input type="submit" disabled = {!flag} />
          </form>
          <button onClick= {handleClick}>Don’t have an account? <span>Signup Here</span></button>
          <div>
        <img src = {signUpCover} alt="no img" />
      </div>
    </div>
  )
}

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
    <div className="formStyle">
      <div className="form">
      <h2>Welcome!</h2>
      <h2>DineOn, Way to Food Heaven!</h2>
      <p id="heading">Indulge in delightful, create an account for Food Heaven!</p>
        <form onSubmit={handleSubmit} >
          <label>Username : </label>
          <input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter your Username" className="inputbox" />
          <label>Email : </label>
          <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" className="inputbox" />
          <label>Password : </label>
          <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" className="inputbox" />
          <div className="checkbox-btn">
              <input type="checkbox" onClick={checkboxHandler} /> 
              <p className="terms">By signing up you are agree to our Term of Use and Privacy Policy.</p>
            </div>
            <input type="submit" disabled = {!flag} className="submit-btn" />
          </form>
          <button onClick= {handleClick}>Don’t have an account? <span id="colorchange">Signup Here</span></button>
      </div>
          <div className="imgContainer">
            <img src = {signUpCover} alt="no img" className="cover" />
          </div>
    </div>
  )
}

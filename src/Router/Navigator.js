import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Home from '../Components/Home'
import UserContext from '../Components/UserContext'
import Shop from '../Components/Shop'
import About from '../Components/About'
import Blog from '../Components/Blog'

export default function Navigator() {
  return (
    <UserContext>
        <div>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/signup' element = {<SignUp />}></Route>
          <Route path='/shop' element = {<Shop />} ></Route>
          <Route path='/about' element = {<About />} ></Route>
          <Route path='/blog' element = {<Blog />} ></Route>
        </Routes>
      </div>
    </UserContext>
    
  )
}

import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Home from '../Components/Home'
import UserContext from '../Components/UserContext'

export default function Navigator() {
  return (
    <UserContext>
        <div>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/signup' element = {<SignUp />}></Route>
        </Routes>
      </div>
    </UserContext>
    
  )
}

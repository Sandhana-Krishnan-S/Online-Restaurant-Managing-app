import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

export default function Navigator() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<SignUp />}></Route>
      </Routes>
    </div>
  )
}

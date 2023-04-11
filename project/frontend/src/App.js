
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from './pages/Dashbord'
import Topbar from './Components/Topbar'
import Login from './pages/Login'
import Register from './pages/Register'
import { LoginOnly } from './pages/LoginOnly'

export default function App() {
  return <>
    < BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Dashbord />} />
        {/* <Route path='/' element={<LoginOnly element={<Dashbord />} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>


  </>
}

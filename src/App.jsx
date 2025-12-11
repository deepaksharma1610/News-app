import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}



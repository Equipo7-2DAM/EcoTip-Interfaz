import { useState, useEffect } from 'react'
import { Route, Router, BrowserRouter, Routes } from 'react-router'
import Home  from './pages/Home'
import EcosistemasPage from './pages/EcosistemasPage'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ecosistemas' element={<EcosistemasPage/>} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

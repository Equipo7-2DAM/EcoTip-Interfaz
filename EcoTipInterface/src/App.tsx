import { useState, useEffect } from 'react'
import { Route, Router, BrowserRouter, Routes, NavLink } from 'react-router'
import Navigation from './components/Navigation'
import Home  from './pages/Home'
import EcosistemasPage from './pages/EcosistemasPage'
import './App.css'
import Header from './components/Header'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ecosistemas' element={<EcosistemasPage/>} />
        <Route path='/animales' element={<h1>Animales</h1>} />
        <Route path='/usuarios' element={<h1>Usuarios</h1>} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

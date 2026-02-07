import { useState, useEffect } from 'react'
import { Route, Router, BrowserRouter, Routes, NavLink } from 'react-router'
import Navigation from './components/Navigation'
import Home  from './pages/Home'
import EcosistemasPage from './pages/EcosistemasPage'
import AnimalesPage from './pages/AnimalesPage'
import EcosistemaDetailPage  from './pages/EcosistemaDetailPage'
import AnimalDetailPage from './pages/AnimalDetailPage'
import Header from './components/Header'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ecosistemas' element={<EcosistemasPage/>} />
        <Route path='/usuarios' element={<></>} />
        <Route path='/animales' element={<AnimalesPage/>} />
        <Route path='/animales/:id' element={<AnimalDetailPage />} />
        <Route path='/ecosistemas/:id' element={<EcosistemaDetailPage />} 
        />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

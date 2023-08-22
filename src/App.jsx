import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import User from './components/User'
import Cardstore from './components/Cardstore'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/card" element={<Cardstore/>} />
      <Route path="/user" element={<User/>} />
    </Routes>
    </>
  )
}

export default App
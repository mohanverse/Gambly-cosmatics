import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
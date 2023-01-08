import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
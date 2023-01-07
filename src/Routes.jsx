import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles.css'

import Navbar from './components/Navbars/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
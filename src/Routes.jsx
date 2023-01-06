import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './assets/styles.css'

import Navbar from './components/Navbars/Navbar'
import Home from './pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <Navbar />
      {/* PAGES */}
      <Home />

    </BrowserRouter>
  )
}

export default Routes
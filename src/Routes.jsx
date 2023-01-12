import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles.css'
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './store/authSlice';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './pages/Home/Home'

function App() {
  const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App
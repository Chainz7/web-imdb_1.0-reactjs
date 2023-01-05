import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './assets/default.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
  </React.StrictMode>
);


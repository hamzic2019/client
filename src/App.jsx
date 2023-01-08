import React,{useState, createContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
        </Routes>
    </div>
  )
}

export default App

import React,{useState, createContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </div>
  )
}

export default App

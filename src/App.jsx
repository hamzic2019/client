import React,{useState, createContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import MakeProfile from './pages/MakeProfile/MakeProfile';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/trazi" element={<Search />} />
          <Route path="/prijava" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/novi-profil" element={<MakeProfile />} />
        </Routes>
    </div>
  )
}

export default App

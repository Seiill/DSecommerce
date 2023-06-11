import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from '../src/pages/home';
import Desayunos from './pages/desayunos';
import Detalles from './pages/detalles'
import Nosotros from './pages/nosotros';
import CartP from './pages/cart';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<Home/>} exact />
      <Route path="/Desayunos" element={<Desayunos/>} />
      <Route path="/Detalles" element={<Detalles/>} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Cart" element={<CartP />} />
      </Routes>
    
       
    </Router>
  )
}

export default App

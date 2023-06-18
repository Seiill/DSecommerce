import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/home';
import Desayunos from './pages/desayunos';
import Detalles from './pages/detalles'
import Nosotros from './pages/nosotros';
import CartP from './pages/cart';
import Producto from './pages/Producto';  
import Contact from './pages/contact';
function App() {
  const toggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
    };
  return (
    <Provider store={store}>
    <Router>
      <Navbar toggle={toggle}/>
      <Routes>
      
      <Route path="/" element={<Home/>} exact />
      <Route path="/desayunos" element={<Desayunos/>} exact  />
      <Route path="/detalles" element={<Detalles/>} exact />
      <Route path="/nosotros" element={<Nosotros />} exact />
      <Route path="/cart" element={<CartP />} exact />
      <Route path="/producto/:id" element={<Producto />} exact />
      <Route path="/contact" element={<Contact />} exact />
      </Routes>
    
       
    </Router> 
    </Provider>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Footer } from './components/Footer';

const App = () => {
  
  const [array, setArray] = useState([]);

  return (

    <BrowserRouter>

      <Navbar/>
      <Routes>

        <Route path="/" element={<Home array={array} setarray={setArray} />} />
        <Route path="/Shop" element={<Shop array={array} setarray={setArray}  ></Shop>} />
        <Route path="/Cart" element={<Cart array={array} setarray={setArray} ></Cart>} />

      </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
};

export default App;
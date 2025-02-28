import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App = () => {
  const [array, setArray] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (

    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home array={array} setarray={setArray} theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/Shop" element={<Shop array={array} setarray={setArray} theme={theme} toggleTheme={toggleTheme} ></Shop>} />
        <Route path="/Cart" element={<Cart array={array} setarray={setArray} theme={theme} toggleTheme={toggleTheme} ></Cart>} />
        <Route path="/About" element={<About array={array} setarray={setArray} theme={theme} toggleTheme={toggleTheme} ></About>} />
        <Route path="/Contact" element={<Contact array={array} setarray={setArray} theme={theme} toggleTheme={toggleTheme} ></Contact>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
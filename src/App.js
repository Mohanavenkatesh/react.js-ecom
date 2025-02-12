import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { useState } from 'react';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Women } from './products/Women';
import { Men } from './products/Men';
import { Kids } from './products/Kids';
import { Footer } from './components/Footer';

function App() {

  const [array, setarray] = useState([])



  return (
    <div className="App">

      <BrowserRouter>

        <Navbar></Navbar>

        <Home></Home>
        
        <Routes>

          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/Cart' element={<Cart array={array} setarray={setarray}></Cart>}></Route>
          <Route path='/product' element={<Product array={array} setarray={setarray}></Product>}></Route>



          <Route path='/Women' element={<Women array={array} setarray={setarray}></Women>}></Route>
          <Route path='/Men' element={<Men array={array} setarray={setarray}></Men>}></Route>
          <Route path='/Kids' element={<Kids array={array} setarray={setarray}></Kids>}></Route>



        </Routes>

        <Footer></Footer>

      </BrowserRouter>



    </div>
  );
}

export default App;

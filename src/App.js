import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Fav } from './pages/Fav';
import { Cart } from './pages/Cart';
import { Navbar } from './comp/Navbar';
import { useState } from 'react';
import { Footer } from './comp/Footer';

function App() {


  const [array, setarray] = useState([])


  return (

    <div className="App">

      <BrowserRouter>
      
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Product' element={<Product array={array} setarray={setarray}></Product>}></Route>
          <Route path='/Fav' element={<Fav></Fav>}></Route>
          <Route path='/Cart' element={<Cart array={array} setarray={setarray}></Cart>}></Route>
        </Routes>

        <Footer></Footer>

      </BrowserRouter>


    </div>
  );
}

export default App;

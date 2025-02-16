import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Men } from './pages/Men';
import { Women } from './pages/Women';
import { Kids } from './pages/Kids';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>

          <Route path='/Men' element={<Men></Men>}></Route>
          <Route path='/Women' element={<Women></Women>}></Route>
          <Route path='/Kids' element={<Kids></Kids>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

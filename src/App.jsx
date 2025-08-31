import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Error from './pages/Error'
import Cart from './pages/Cart'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Products' element={<Products />} ></Route>
          <Route path='/Content' element={<Contact />} ></Route>
          <Route path='/Faq' element={<Faq />} ></Route>
          <Route path='/Cart' element={<Cart />} ></Route>
          <Route path='/Men' element={<Men />} ></Route>
          <Route path='/Women' element={<Women />} ></Route>
          <Route path='/Kids' element={<Kids />} ></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import NewArrivals from './pages/NewArrivals'
import Necklaces from './pages/Necklaces'
import Rings from './pages/Rings'
import Search from './pages/Search'
import Account from './pages/Account'
import Wishlist from './pages/Wishlist'
import Bag from './pages/Bag'
import BestSellers from './pages/BestSellers'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/NewArrivals' element={<NewArrivals />} />
          <Route path='/BestSellers' element={<BestSellers />} />
          <Route path='/Necklaces' element={<Necklaces />} />
          <Route path='/Rings' element={<Rings />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Bag' element={<Bag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

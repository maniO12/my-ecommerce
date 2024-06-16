import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Shop from './Pages/Shop.js';
import Product from './Pages/Product.js';
import Shopcategory from './Pages/Shopcategory.js';
import Cart from './Pages/Cart.js';
import Loginsignup from './Pages/Loginsignup.js';
import Footer from './components/Footer/Footer.js';
import mens_banner from './components/Assets/banner_mens.png'
import womens_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import Login from './Pages/Login.js';
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<Shopcategory  banner={mens_banner} category="men" />}></Route>
        <Route path="/womens" element={<Shopcategory  banner={womens_banner} category="women"/>}></Route>
        <Route path="/kids" element={<Shopcategory  banner={kids_banner} category="kid"/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}></Route>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<Loginsignup/>}></Route>
        <Route path="/Loginlog" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App

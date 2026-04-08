import React, { useState } from 'react'
import Home from './Components/Home/Home'
import ProductsPage from './Components/ProductPages/AllProductPage'
import { Route, Routes } from 'react-router-dom'
import ProductProvider from './Context/ProductProvider'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Cart from './Components/Cart/Cart'
import CartProvider from './Context/CartProvider'
import ProductDetails from './Components/ProductPages/ProductDetails'
import OrderSummary from './Components/OrderSummary/OrderSummary'
import OrderPlaced from './Components/OrderPlaced/OrderPlaced'




const App = () => {
   const handleScroll = () =>{
    const section = document.getElementById('product-section')
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  const [orderSummary,setOrderSummary] = useState(false)
  return (
    <ProductProvider>
   <CartProvider>
    <Navbar handleScroll={handleScroll}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/allproducts" element={<ProductsPage/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart setOrderSummary={setOrderSummary} orderSummary={orderSummary}/>}/>
      <Route path="/order-success" element={<OrderPlaced/>}/>
      

    </Routes>
    <Footer/>
   </CartProvider>
    </ProductProvider>
  )
}

export default App

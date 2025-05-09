import React from 'react'
import { Router, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'



const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routing

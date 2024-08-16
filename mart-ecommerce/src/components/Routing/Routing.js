import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default Routing;

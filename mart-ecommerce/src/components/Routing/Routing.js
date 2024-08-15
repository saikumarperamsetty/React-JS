import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </div>
  )
}

export default Routing;

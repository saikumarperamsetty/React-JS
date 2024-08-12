import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Routing;

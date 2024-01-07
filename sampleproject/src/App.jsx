import React from 'react';
import Usereducer from './assets/components/Usereducer';
import Useref from './assets/components/Useref'
import { Route, Routes } from "react-router-dom";

import HomePage from './assets/components/HomePage';
import AboutPage from './assets/components/AboutPage';
import Navbar from './assets/components/Navbar';
import Productdetail from './assets/components/Productdetail';
import Cartpage from './assets/components/Cartpage';
import Nomatch from './assets/components/Nomatch';
import Product from './assets/components/Product'
import Hotproduct from './assets/components/Hotproduct';
import Similarproduct from './assets/components/Similarproduct';
import User from './assets/components/User';
import Userdetail from './assets/components/Userdetail';
const App = () => {
  return (
    <div>
      {/* <Useref/> */}
      {/* <Usereducer/> */}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/cart" element={<Cartpage />} />

        <Route path="/product" element={<Product />} >
          <Route path="hotproduct" element={<Hotproduct />} />
          <Route path="similarproduct" element={<Similarproduct />} />
        </Route>

        <Route path='/user' element={<User />} />
        <Route path='/user/:userId' element={<Userdetail/>} />
        
          <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav>
          {/* <Link to="/"> Home </Link>
          <Link to="/about"> About </Link> */}
                <NavLink to ='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/productdetail'>Product Detail</NavLink>
                <NavLink to='/product'>Product</NavLink>
                
        </nav>
      </div>
    );
};

export default Navbar;
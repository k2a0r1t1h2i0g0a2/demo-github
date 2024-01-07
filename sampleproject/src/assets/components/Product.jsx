import React from "react";
import { Link, Outlet } from "react-router-dom";
const Product = () => {
    return (
      <div>
        <div>
          <h1>Product page</h1>
          <nav>
            <Link to="hotproduct">Hot product</Link>
            <Link to="similarproduct">Similar product</Link>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
};

export default Product;

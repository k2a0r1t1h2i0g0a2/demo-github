import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productdetail = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Product Detail Page</h1>
            <button onClick={()=>{navigate("/cart");}}>Go to Cart</button>
        </div>
    );
};

export default Productdetail;
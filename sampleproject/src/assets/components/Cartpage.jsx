import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Cart Page</h1>
            <button onClick={handleClick}>Go To Home</button>
        </div>
    );
};

export default Cartpage;
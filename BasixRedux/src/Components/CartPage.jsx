import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../Features/CartSlice.jsx';
 
const CartPage = () => {
    const dispatch = useDispatch()
    return (
      <div>
        <h1>Cart Page</h1>
        <button
          onClick={() => {
            dispatch(ADD());
          }}
          style={{ backgroundColor: "crimson" }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(SUB());
          }}
          style={{ backgroundColor: "yellow" }}
        >
          Sub
        </button>
      </div>
    );
};

export default CartPage;
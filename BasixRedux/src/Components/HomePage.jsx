import React from 'react';
import { useSelector } from 'react-redux';
const HomePage = () => {

    const homeStateValue = useSelector(state=>state.cartPageReducer.value)
    return (
        <div>
            <h1>Home Page :{homeStateValue}</h1>
        </div>
    );
};

export default HomePage;
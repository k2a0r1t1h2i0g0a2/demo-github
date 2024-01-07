import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const Child3 = () => {
    const child3color = useContext(myContext)
    return (
      <div style={{ backgroundColor: child3color }}>
        <h1>child 3</h1>
      </div>
    );
};

export default Child3;
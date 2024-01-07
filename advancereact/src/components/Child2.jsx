import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';
import Child2Child from './Child2Child';

const Child2 = () => {
    const child2color=useContext(myContext)
    return (
      <div style={{ backgroundColor: child2color }}>
        <h1>child 2</h1>
        <Child2Child />
      </div>
    );
};

export default Child2;
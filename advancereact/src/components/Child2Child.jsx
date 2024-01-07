import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const Child2Child = () => {
    const child2childcolor = useContext(myContext)
    return (
      <div style={{ backgroundColor: child2childcolor}}>
        <h1>Child2 - child</h1>
      </div>
    );
};

export default Child2Child;
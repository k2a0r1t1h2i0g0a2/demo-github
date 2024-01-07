import React from 'react';
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import Child2Child from './components/Child2Child'
import { useState, createContext } from 'react'

export  const myContext = createContext();
const App = () => {
 
  const [color,setColor]= useState('red')
  return (
    <div>
      <h1>parent component</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
      <myContext.Provider value="orange">
        <Child1 />
      </myContext.Provider>
      <myContext.Provider value={color}>
        <Child2 />
        <Child3 />
        <Child2Child />
      </myContext.Provider>
    </div>
  );
};

export default App;

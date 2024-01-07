import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './assets/component/heading';
import Grid from './assets/component/Grid';
import Float from './assets/component/Float';
import Column from './assets/component/Column';
import Icons from './assets/component/Icons'
import Fetch from './assets/component/fetch';
import Usestate from './assets/component/usestate';
import Useeffect from './assets/component/Useeffect';
import Event from './assets/component/Event';
import Form from './assets/component/Form';
import Bootstrap from './assets/component/Bootstrap';
import Formick from './assets/component/Form';
import UseRef from './assets/component/UseRef';
import Input from './assets/component/Input.jsx';
function App()  {
 
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arrObj = [
    {
      id: 1,
      name: "karthi",
      stake: "FSD",
      age: 20,
    },
    { id: 1, name: "karthi", stake: "FSD", age: 20 },
    {
      id: 1,
      name: "karthi",
      stake: "FSD",
      age: 20,
    },
    { id: 1, name: "karthi", stake: "FSD", age: 20 },
  ];
  return (
    <>
      <div className="App">
        {/* <Icons/>
         <Heading/>
         <Column/>
         <Float/>
         <Grid/> */}
        {/* <Usestate/> */}
        {/* <Fetch arr={arr} arrObj={arrObj} /> */}
        {/* <Useeffect/> */}
        {/* <Event /> */}
        {/* <Form/>
        <Bootstrap /> */}
        {/* <Formick/> */}
        {/* <UseRef /> */}
        {/* npm create vite@latest filename */}
        {/* <Card /> */}
        <Input />
      </div>
    </>
  );
};
export default App

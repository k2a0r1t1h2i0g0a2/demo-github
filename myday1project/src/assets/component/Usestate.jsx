import React, { useState } from 'react';

const Usestate = () => {
    let [data, setData] = useState(10)
    let [value, setValue] = useState([1, 2, 3, 4, 5])
    let [arrObj, setArrObj] = useState([
        {
            id: 1,
            name: "karthi",
            stake: "FSD",
            age: 20,
        },
        { id: 1, name: "karthi", stake: "FSD", age: 20 },
        { id: 1, name: "karthi", stake: "FSD", age: 20 },
        { id: 1, name: "karthi", stake: "FSD", age: 20 },
    ]);
    let handleSubmit = () => {
        setData(data + 1)
    }
    console.log(setData);
    return (
      <div>
        {data}
        <div>
          <button onClick={handleSubmit}>click</button>
        </div>
        <div>
          {value.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <h3>{item}</h3>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {arrObj.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <h3>id :{item.id}</h3>
                  <h3>name:{item.name}</h3>
                  <h3>state:{item.state}</h3>
                  <h3>age:{item.age}</h3>
                 
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
};

export default Usestate;
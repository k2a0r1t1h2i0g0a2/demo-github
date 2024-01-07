import React, { useReducer } from 'react';
import ReducerAction from './Reduceaction';
const Usereducer = () => {
    const [state, dispatch] = useReducer(ReducerAction , {count:0});
    return (
      <div>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "ADD", payload: 5 });
          }}
        >
          ADD
        </button>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "SUB", payload: 2 });
            }}
          >
            SUB
          </button>{" "}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "MUL", payload: 3 });
            }}
          >
            MUL
          </button>
        </div>
      </div>
    );
};

export default Usereducer;
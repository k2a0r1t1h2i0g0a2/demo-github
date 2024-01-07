import React from "react";
import { useContext } from "react";
import { myContext } from "../App";
const Child1 = () => {
  const child1color = useContext(myContext);
  return (
    <div style={{ backgroundColor: child1color }}>
      <h1>child 1</h1>
    </div>
  );
};

export default Child1;

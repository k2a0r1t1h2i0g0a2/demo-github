import React, { useState, useRef } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const myRef = useRef(0);
  const [inputValue2, setInputValue2] = useState("");
  //   const myRef = useRef(0); // Use useRef instead of UseRef

  const handleChange = (e) => {
    setInputValue(e.target.value);
    myRef.current += 1;
  }

  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
    myRef.current += 1;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Value"
        value={inputValue}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Value"
        value={inputValue2}
        onChange={handleChange2}
      />

      <div>{myRef.current}</div>

    </div>
  );
};

export default UseRef;

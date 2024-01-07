import React from 'react';
import { useEffect } from 'react';
import { useRef } from "react";
const Useref = () => {
    const myRef = useRef();
    useEffect(() => {
    myRef.current.focus()
},[])
    
    
    return (
      <div>
        <div>
        
          <input type="text" placeholder="Enter a value1" ref={myRef} />
        </div>
        <div>
          <input type="text" placeholder="Enter a value2" />
            </div>
            
      </div>
    );
};

export default Useref;
import React, { useState } from 'react';

const Event = () => {
            const [data, setData] = useState("");
    let handleChange = (e) => {
        setData(e.target.value)
        console.log(data);
    }
    return (
      <div>
        <input type="text" value={data} onChange={handleChange} />
            <div>inputData:{data}</div>
      </div>
    );
};

export default Event;
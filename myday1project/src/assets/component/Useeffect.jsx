import React, { useEffect, useState } from "react";

const Useeffect = () => {
  let [value, setValue] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setValue(data))
    //   .catch((err) => console.log(err));
      
      await axios.get("https://jsonplaceholder.typicode.com/users")
          .then(setValue(res.data))
      .catch(console.log(err))
  };

  return (
    <div>
      {value.map((item, index) => {
        return (
          <>
            <div key={index}>
              <h3>id :{item.id}</h3>
              <h3>username:{item.username}</h3>
              <h3>name:{item.name}</h3>
              <h3>email:{item.email}</h3>
              <h3>address:{item.address.street}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Useeffect;

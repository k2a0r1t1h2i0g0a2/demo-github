
import React ,{useState} from 'react';

const Formick = () => {
    const [data, setData] = useState({ username: '', password: '' });
    
    let handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form values",data);
    }
 let handleChange = (e) => {
  const{name , value}=e.target
  setData({...data,[name]:value})
 };

 console.log("Form values", data);


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="username"
            onChange={handleChange}
          />

          <input
            type="text"
            name="password"
            value={data.password}
            placeholder="password"
            onChange={handleChange}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
};

export default Formick;
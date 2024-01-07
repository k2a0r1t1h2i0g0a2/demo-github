import React from "react";

const Fetch = ({ arr, arrObj }) => {
    return (
      <div>
        {arr.map((item, index) => {
          return (
            <>
              <div key={index}>
                <h3>{item}</h3>
              </div>
            </>
          );
        })}
        <table style={{ border: "2px dotted" }}>
          <thead>
            <tr>
              <th style={{ border: "2px dotted" }}>ID</th>
              <th style={{ border: "2px dotted" }}>Name</th>
              <th style={{ border: "2px dotted" }}>Stake</th>
              <th style = {{border:"2px dotted"}}>Age</th>
            </tr>
          </thead>
          <tbody>
            {arrObj.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td style={{ border: "2px dotted" }}>{item.id}</td>
                    <td style={{ border: "2px dotted" }}>{item.name}</td>
                    <td style={{ border: "2px dotted" }}>{item.stake}</td>
                    <td style={{ border: "2px dotted" }}>{item.age}</td>
                    <td style={{ border: "2px dotted" }}>{item.age}</td>
                    <td style={{ border: "2px dotted" }}>{item.age}</td>
                    <td style={{ border: "2px dotted" }}>{item.age}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default Fetch;

import React from "react";
import "../Total/Total.css";

const Total = () => {
  return (
    <>
      <div className="totalMain">
        <table className="ttTable">
          <thead>
            <tr>
              <th>Participants</th>
              <th>Steps walked</th>
              <th>Distance covered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10000</td>
              <td>10000</td>
              <td>1000 km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Total;

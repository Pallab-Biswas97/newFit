import React, { useEffect, useState } from "react";
import "..//Leaders/Leaders.css";
import axios from "axios";

const Leaders = () => {
  const [item, setItem] = useState([]);

  useEffect(()=>{
    const app = async () =>{
      await axios.get("http://3.88.57.217:5000/tophundred").then((response) => {
        const dt = response.data;
        console.log(dt);
          setItem(dt)
        })
  }
  app();
},[]);

  return (
    <>

      <div className="ldMain">
        <div className="titleld">Top 100 Participants</div>
        <div className="tbl">
          <table id="customers">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Region</th>
                <th>Participant</th>
                <th>Steps</th>
              </tr>
            </thead>
            <tbody>
            {item.map((val, index)=>{
            return(
               <tr key={val.ID}>
                        <td>{index+1}</td>
                        <td>{val.Location}</td>
                        <td>{val.Name}</td>
                        <td>{val.Sum}</td>
               </tr>
            )
        })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Leaders;

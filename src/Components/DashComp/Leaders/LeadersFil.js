import React, {useEffect, useState} from "react";
import "..//Leaders/Leaders.css";
import axios from "axios";

const LeadersFil = () => {
  const [item, setItem] = useState([]);

  useEffect(()=>{
    const app = async () =>{
      await axios.get("http://3.88.57.217:5000/nilesh").then((response) => {
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
        <div className="titleld">Top Leadership</div>
        <div className="tbl">
          <table id="customers">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Leadership</th>
                <th>Participants</th>
                <th>Total steps</th>
              </tr>
            </thead>
            <tbody>
            {item.map((val, index)=>{
            return(
               <tr key={val.ID}>
                        <td>{index+1}</td>
                        <td>{val._id}</td>
                        <td>{val.count}</td>
                        <td>{val.total}</td>
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
export default LeadersFil;

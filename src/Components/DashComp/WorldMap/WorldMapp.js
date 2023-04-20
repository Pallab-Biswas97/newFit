import React, { useEffect, useState } from "react";
import "../WorldMap/WorldMapp.css";
import Worldmap from "react-svg-worldmap";
import axios from "axios";


const WorldMapp = () => {
  const [mpData, setMpData] = useState(0);

  // const [data, setdata] = useState[{ country: "in", value: 1389618778 }];

  const data = [{ country: "in", value: mpData }];
  
  useEffect(() => {
    let indSum=0;
    
    
    const app = async () => {
      const ind = [];
      await axios.get("http://3.88.57.217:5000/region").then((response) => {
        console.log(response.data)

        response.data.map(item=>{
           ind.push(item.total);
        })

        console.log(ind.length + " sdf")

        for(var i = 0; i<(response.data.length); i++){
          indSum = indSum + parseInt(response.data[i].total)
        }
        console.log(indSum + " Ind sum");
        setMpData(indSum);
      });
    };

    
    app();
  }, []);

  return (
    <>
      <div className="wdMap desktop">
      <div className="locTitle">
                <span>
                Total steps region wise
                </span>
              </div>
        <Worldmap
          color="green"
          
          value-suffix="people"
          size="md"
          data={data}
        />
      </div>
      <div className="wdMap mobile">
      <div className="locTitle">
                <span>
                Total steps region wise
                </span>
              </div>
        <Worldmap
          color="green"
          
          value-suffix="people"
          size="sm"
          data={data}
        />
      </div>
    </>
  );
};

export default WorldMapp;

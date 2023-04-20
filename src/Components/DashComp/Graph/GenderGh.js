import { React, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "../Graph/Graph.css";
import axios from "axios";

const GenderGh = (props) => {
  const [state, setState] = useState({
    series: [44, 55],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: ["Male", "Female"],
    },
  });

  useEffect(() => {
    
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/gender").then((response) => {
        let m = parseInt(response.data[0].total);
        let l = parseInt(response.data[1].total);
        // let sum = m + l;
        // let mp = parseInt((m / sum) * 100);
        // let fp = parseInt((l / sum) * 100);
        // console.log(mp + " " + fp);
        setState({
          series: [m, l],
          options: {
            chart: {
              type: "donut",
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
            labels: ["Male", "Female"],
          },
        });
      });
    };
    app();
  }, []);

  return (
    <>
      <div className="ghMain">
        <div className="gnTitle">
          <span>Gender wise performance</span>
        </div>
        <div className="chart desktop">
          <Chart
            options={state.options}
            series={state.series}
            type={"donut"}
            width="330"
          
          />
        </div>
        <div className="chart mobile">
          <Chart
            options={state.options}
            series={state.series}
            type={"donut"}
            width="330"
            height="300"
          />
        </div>
      </div>
    </>
  );
};
export default GenderGh;

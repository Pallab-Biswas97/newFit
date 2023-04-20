import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../Graph/Graph.css";

const ProGraph = (props) => {
  const [data, setData] = useState({
    series: [
      {
        name: "Steps",
        data: [
          props.Week1,
          props.Week2,
          props.Week3,
          props.Week4,
          props.Week5,
          props.Week6,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.1,
        },
      },
      xaxis: {
        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
        ],
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
    },
  });
  return (
    <>
      <div className="chart">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={125}
        />
      </div>
    </>
  );
};
export default ProGraph;

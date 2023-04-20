import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../Graph/Graph.css"

const TopLeaders = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [500, 400, 300, 200, 100],
      },
    ],
    
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 1,
        dropShadow: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        borderColor: '#fff',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        },  
        row: {
            colors: undefined,
            opacity: 0
        },  
        column: {
            colors: undefined,
            opacity: 0
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        labels: {
            show: false,
          },
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Overall leaders",
        align: "center",
        floating: true,
      },

    
    },
  });
  return (
    <>
      <div className="chart">
        <Chart
          options={state.options}
          series={state.series}
          type={"bar"}
          width="320"
        />
      </div>
    </>
  );
};

export default TopLeaders;

import { React, useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import "../Graph/Graph.css";

const GraphFM = (props) => {


 
  const [state, setState] = useState({
    series: [
      {
        name: "Steps",
        data: [
          
        ],
      },
    ],
    
  });

  const[opn, setOpn] = useState({
    options: {
      chart: {
        height: 300,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "70%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          
        ],
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val / 1000 + "K";
          },
          style: {
            fontSize: "8px",
          },
        },
      },
    },

  });

  useEffect(() => {
    const st=[];
    const op = [];
    
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/combinations?week=Sum&role=Designation").then((response) => {

        response.data.map(item=>{
          op.push(item._id);
          st.push(item.total);
        })

        console.log(op)
        console.log(st)

        setState(
          {
            series: [
              {
                name: "Steps",
                data: st,
              },
            ],
            
          }
        )

        setOpn({
          options: {
            chart: {
              height: 300,
              type: "bar",
              events: {
                click: function (chart, w, e) {
                  // console.log(chart, w, e)
                },
              },
            },
      
            plotOptions: {
              bar: {
                columnWidth: "70%",
                distributed: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            xaxis: {
              categories: op,
              labels: {
                style: {
                  fontSize: "8px",
                },
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return val / 1000 + "K";
                },
                style: {
                  fontSize: "8px",
                },
              },
            },
          },
      
        })

      });
      
    };
    app();
  }, []);

  return (
    <>
      <div className="ghMain ghFm">

        <div className="chart">
          <Chart
            options={opn.options}
            series={state.series}
            type={"bar"}
            width="300"
            height="200"
          />
        </div>
      </div>
    </>
  );
};
export default GraphFM;

import { React, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "../Graph/Graph.css";
import axios from "axios";

const Graph = (props) => {
  const [wk, setWk] = useState("Sum");
  const [optn, setOptn] = useState("Location");

  const [comb, setComb] = useState([]);

  const flt = () => {
    app();
  };

  const wkfn = (e) => {
    setWk(e.target.value);
    console.log(wk);
    // app();
  };
  const optnfn = (e) => {
    setOptn(e.target.value);
    console.log(optn);
    // app();
  };

  const app = async () => {
    const st = [];
    const op = [];
    await axios
      .get(`http://3.88.57.217:5000/combinations?week=${wk}&role=${optn}`)
      .then((response) => {
        console.log(response.data);
        setComb(response.data);
        response.data.map((item) => {
          op.push(item._id);
          st.push(item.total);
        });
      });

    console.log(st);
    console.log(op);

    setState({
      series: [
        {
          name: "Steps",
          data: st,
        },
      ],
    });

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
    });
  };

  useEffect(() => {
    app();
  }, []);

  const [state, setState] = useState({
    series: [
      {
        name: "Steps",
        data: [],
      },
    ],
  });

  const [opn, setOpn] = useState({
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
        categories: [],
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

  const [item, setItem] = useState([]);

  useEffect(() => {
    const app = async () => {
      await axios
        .get("http://3.88.57.217:5000/tophundred")
        .then((response) => {
          const dt = response.data;
          console.log(dt);
          setItem(dt);
        });
    };
    app();
  }, []);

  return (
    <>
      <div className="ghMain">
        <div className="fltrGh">
          <div className="weekGh">
            <label htmlFor="week" className="lbl">
              Select week{" "}
            </label>
            <select name="week" id="week" onChange={wkfn}>
              <option value="Week1">Week 1</option>
              <option value="Week2">Week 2</option>
              <option value="Week3">Week 3</option>
              <option value="Week4">Week 4</option>
              <option value="Week5">Week 5</option>
              <option value="Week6">Week 6 </option>
              <option value="Sum" selected>
                Overall
              </option>
            </select>
          </div>
          <div className="ldGh">
            <label htmlFor="ld" className="lbl">
              Select Option{" "}
            </label>
            <select name="ld" id="ld" onChange={optnfn}>
              <option value="Leadership">Bu Leaders</option>
              <option value="Location" selected>
                Location
              </option>
            </select>
          </div>
          <div className="flBtn">
            <button className="fltBtn" onClick={flt}>
              Apply Filter
            </button>
          </div>
        </div>
        <div className="chart desktop">
          <Chart
            options={opn.options}
            series={state.series}
            type={"bar"}
            width="450"
            height="260"
          />
        </div>
        <div className="chart mobile">
          <Chart
            options={opn.options}
            series={state.series}
            type={"bar"}
            width="350"
            height="260"
          />
        </div>
      </div>
    </>
  );
};
export default Graph;

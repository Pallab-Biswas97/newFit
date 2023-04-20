import React, { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import Leaders from "../DashComp/Leaders/Leaders";
import TopLeaders from "../DashComp/Graph/TopLeaders";
import Graph from "../DashComp/Graph/Graph";
import Total from "../DashComp/Total/Total";
import GenderGh from "../DashComp/Graph/GenderGh";
import ProfileCard from "../DashComp/ProfileCard/ProfileCard";
import WorldMapp from "../DashComp/WorldMap/WorldMapp";
import LeadersFil from "../DashComp/Leaders/LeadersFil";
import GraphFM from "../DashComp/Graph/GraphFM";
import axios from "axios";
const Dashboard = () => {
  const [ovl, setOvl] = useState([]);

  useEffect(() => {
    const app = async () => {
      await axios
        .get("http://3.88.57.217:5000/overallsteps")
        .then((response) => {
          const dt = response.data;
          console.log(dt);
          setOvl(dt);
        });
    };
    app();
  }, []);

  const [week, setWeek] = useState(0);

  useEffect(() => {
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/week1").then((response) => {
        setWeek(response.data[0].sum);
        console.log(week);
      });
    };
    app();
  }, []);

  const [totpar, setTotPar] = useState(0);

  useEffect(() => {
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/totalpar").then((response) => {
        setTotPar(parseInt(response.data));
        console.log(totpar);
      });
    };
    app();
  }, []);

  const [bu, setBu] = useState("");

  useEffect(() => {
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/butop").then((response) => {
        let a = response.data[0]._id;
        console.log(a);
        setBu(a);
      });
    };
    app();
  }, []);

  const [ld, setLd] = useState("");

  useEffect(() => {
    const app = async () => {
      await axios.get("http://3.88.57.217:5000/leadertop").then((response) => {
        let b = response.data[0]._id;
        console.log(b);
        setLd(b);
      });
    };
    app();
  }, []);

  return (
    <>
      <div className="main">
        <div className="leftMain">
          <div className="top">
            <div className="card">
              <div className="title">Total Participants</div>
              <div className="textC" title={totpar}>
                {totpar}
              </div>
            </div>
            <div className="card">
              <div className="title">Overall steps</div>
              <div className="textC" title="1000">
                {ovl.map((val, index) => {
                  return <span>{val.sum}</span>;
                })}
              </div>
            </div>
            <div className="card">
              <div className="title">Weekly steps</div>
              <div className="textC" title={week}>
                {week}
              </div>
            </div>
            <div className="card">
              <div className="title">BU of Week</div>
              <div className="textC">{bu}</div>
            </div>
            <div className="card">
              <div className="title">BU leader of week</div>
              <div className="textC">{ld}</div>
            </div>
          </div>
          <div className="pfCd mobile">
                <ProfileCard />
              </div>
          <div className="mid">
            <div className="leftGender">
              <GenderGh />
            </div>
            <div className="midFilter">
              <Graph />
            </div>
            <div className="rightMap">
             
              <WorldMapp />
            </div>
          </div>
          <div className="btm">
            <div className="ttTable">
              <Leaders />
            </div>
            <div className="ttTable">
              <LeadersFil />
            </div>
            <div className="ttTable">
              <div className="pfCd desktop">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

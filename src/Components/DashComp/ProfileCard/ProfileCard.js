import React, { useEffect, useState } from "react";
import "../ProfileCard/ProfileCard.css";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
import ProGraph from "../Graph/ProGraph";

const ProfileCard = () => {
  const [user, setUser] = useState(false);
  const [findUser, setFindUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let rank = 0;
  const [rnc, setRnc] = useState(0);
  const initialValues = {
    email: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const regex = /^[a-z0-9._-]+@capgemini.com*$/;

  const handleChange = (e) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [e.target.name]: e.target.value,
      };
    });
    console.log(formValues.email);
  };

  const app = async () => {
    await axios.get("http://3.88.57.217:5000/alldata").then((response) => {
      const dt = response.data;
      console.log(dt);
      setFindUser(response.data);
    });
  };

  useEffect(() => {
    app();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let values = formValues;
    let errors = {};

    if (!values.email) {
      errors.email = "*Email is required!";
    }
    // else if (!regex.test(values.email)) {
    //   errors.email = "*Enter valid Capgemini Email ID";
    // }
    else {
      errors.email = "";
    }

    setFormErrors(errors);
    // console.log("err "+ formErrors.email)
    let str = errors.email;

    let cStr = "";
    let tr = false;
    const st = [];

    if (str === cStr) {
      setIsLoading(true);

      app();

      findUser.map((item) => {
        st.push(item.Email);
      });

      var fg = 0;

      for (var i = 0; i < st.length; i++) {
        if (st[i] === formValues.email) {
          // console.log("Found");
          fg = 1;
          rank = i;
          setRnc(i);
          break;
        } else {
          // console.log("Not found");
          var fg = 0;
        }
      }

      if (fg === 1) {
        setUser(true);
        console.log(rank);
      } else {
        console.log("Not found");
        window.location.reload();
        alert("User not found");
      }

      console.log("ok");
      console.log(st);

      setIsLoading(false);
    }
  };

  // const fnc = () => {

  //   if (formErrors.email == "") {

  //     setUser(true);
  //     setIsLoading(false);

  //     console.log("go");
  //   }
  // };
  return (
    <>
      <div className="pfMain">
        <div>
          {!user && (
            <>
              <div className="pfTitle">
                <span>Enter Email ID to know your Progress</span>
              </div>
              <div className="inTitle">
                <form className="frm" onSubmit={handleSubmit}>
                  <div className=" inp">
                    <input
                      placeholder="Email"
                      className="emlInp"
                      type="text"
                      onChange={handleChange}
                      name="email"
                      value={formValues.email}
                    />
                    <button className="emlBtn" type="submit">
                      {" "}
                      Go{" "}
                    </button>
                  </div>
                  <div className="errN">{formErrors.email}</div>
                </form>
              </div>
            </>
          )}
        </div>
        <div>
          {user && (
            <div className="yourPgs">
              
              <div className="rncd">
                <div>Your Progress</div>
                <div> Rank : <span className="rankNm">{rnc+1}</span></div>
              </div>
             <div className="thpfr">
             <table className="thPf">
                <thead>
                  <tr>
                    <th className="thCell">
                      <div>Week 1</div>
                    </th>
                    <th className="thCell">
                      <div>Week 2</div>
                    </th>
                    <th className="thCell">
                      <div>Week 3</div>
                    </th>
                    <th className="thCell">
                      <div>Week 4</div>
                    </th>
                    <th className="thCell">
                      <div>Week 5</div>
                    </th>
                    <th className="thCell">
                      <div>Week 6</div>
                    </th>
                    <th className="thCell">
                      <div>Overall</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week1}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week2}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week3}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week4}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week5}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Week6}</div>
                    </td>
                    <td className="tdCell">
                      <div>{findUser[rnc].Sum}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
             </div>
              <div className="ghPro">
                <ProGraph {...findUser[rnc]}/>
              </div>
            </div>
          )}
        </div>
        {isLoading && (
          <div className="modal">
            <SyncLoader color="#36d7b7" />
          </div>
        )}
      </div>
    </>
  );
};
export default ProfileCard;

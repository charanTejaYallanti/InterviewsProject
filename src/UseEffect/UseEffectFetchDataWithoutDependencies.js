import { color } from "@mui/system";
import React, { useState, useEffect } from "react";

const UseEffectFetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ierror, setIerror] = useState({
    status: false,
    msg: "",
  });

  const fetchDataFromApi = async (url) => {
    setLoading(true);
    console.log("Hi");

    // setIerror({
    //   status: false,
    //   msg: "",
    // });
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setState(data);
      setLoading(false);
      setIerror({
        status: false,
        msg: "", ////////////////
      });
    } catch (error) {
      setLoading(false);
      setIerror({
        status: true,
        msg: "Something went wrong...! please try again",
      });
    }
  };
  useEffect(() => {
    fetchDataFromApi(url);
  }, []);
  if (loading) {
    console.log("here");
    return (
      <div>
        <img src="./loading.jpg" alt="" />
      </div>
    );
  }
  if (ierror?.status) {
    console.log("here uiam");

    return (
      <div>
        <ha style={{ color: "red" }}>{ierror?.msg}</ha>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {state.map((eachobj) => {
          return (
            <li key={eachobj.id}>
              <div>{eachobj.name}</div>
              <div>{eachobj.email}</div>
              <div>{eachobj.phone}</div>
              <div>{eachobj.address.city}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;

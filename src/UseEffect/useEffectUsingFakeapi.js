import axios from "axios";
import React, { useState } from "react";

const UseEffectUsingFakeapi = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeAge, setEmployeeAge] = useState("");
  const [employeeQualification, setEmployeeQualification] = useState();
  const [employeeSex, setemployeeSex] = useState();
  const [isEditing, setEditing] = useState(false);
  const [employeeData, setemployeeData] = useState([]);
  const url = "http://localhost:8000/employee";
  const addToDb = () => {
    axios.post(url, {
      employeeID: `${Math.floor(Math.random() * Date.now()).toString(16)}`,
      employeeName: employeeName,
      employeeAge: employeeAge,
      employeeQualification: employeeQualification,
      employeeSex: employeeSex,
    });
  };
  const getDataFromDB = () => {
    axios
      .get(url)
      .then((res) => {
        setemployeeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(employeeData);
  };
  const edtiData = (emplyeeid) => {};
  const deleteDataFromDB = (emplyeeid) => {
    axios.delete(url + "/" + emplyeeid).then(getDataFromDB);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            id="employeeName"
            name="employeeName"
            value={employeeName}
            placeholder="Enter Employee Name"
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="employeeAge"
            name="employeeAge"
            value={employeeAge}
            placeholder="Enter Age  "
            onChange={(e) => {
              setEmployeeAge(e.target.value);
            }}
          />
        </div>

        <h1>Qualification</h1>
        <div>
          <select
            value={employeeQualification}
            onChange={(e) => {
              setEmployeeQualification(e.target.value);
            }}
          >
            <option>B.Tech</option>
            <option>M.tech</option>
            <option>MBA</option>
            <option>others</option>
          </select>
        </div>
        <div>
          <input
            type="radio"
            id="employeeSex"
            name="employeeSex"
            value="male"
            onChange={(e) => setemployeeSex(e.target.value)}
          />{" "}
          male
          <input
            type="radio"
            id="employeeSex"
            name="employeeSex"
            value="female"
            onChange={(e) => setemployeeSex(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            id="employeeSex"
            name="employeeSex"
            value="others"
            onChange={(e) => setemployeeSex(e.target.value)}
          />
          others
        </div>
        <button type="submit" onClick={addToDb}>
          submit
        </button>
      </form>
      <button onClick={getDataFromDB}>show data in DB</button>
      <div>
        <hr></hr>
        {employeeData.map((eachpbj) => {
          return (
            <div key={eachpbj.id}>
              <div>
                {isEditing ? (
                  <input
                    id="employeeName"
                    name="employeeName"
                    value={employeeName}
                    placeholder="Enter Employee Name"
                    onChange={(e) => {
                      setEmployeeName(e.target.value);
                    }}
                  />
                ) : (
                  eachpbj.employeeName
                )}
              </div>
              <div>{eachpbj.employeeAge}</div>
              <div>{eachpbj.employeeQualification}</div>
              <div>{eachpbj.employeeSex}</div>
              <button
                onClick={() => {
                  edtiData(eachpbj.id);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteDataFromDB(eachpbj.id)}>
                Delete
              </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectUsingFakeapi;

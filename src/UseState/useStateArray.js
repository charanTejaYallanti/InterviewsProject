import React, { useState } from "react";

const DisplayArrayOfObjects = () => {
  let intialdata = [
    { id: 1, name: "chn", age: 25, education: "B.tech" },
    {
      id: 2,
      name: "Teja",
      age: 26,
      education: "M.tech",
    },
    {
      id: 3,
      name: "Ram",
      age: 27,
      education: "BE",
    },
  ];
  const [data, setData] = useState(intialdata);

  function deleteRecord(id) {
    const filterData = data.filter((eachitem) => {
      return eachitem.id != id;
    });
    setData(filterData);
  }
  return (
    <div>
      {data.map((eachobj) => {
        const { name, age, education, id } = eachobj;
        return (
          <li key={id}>
            <div>{name}</div>
            <div>{age}</div>
            <div>{education}</div>

            <button
              onClick={() => {
                deleteRecord(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayArrayOfObjects;

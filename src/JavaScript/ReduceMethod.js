import React from "react";

const Reduce = () => {
  let arrayOf = [1, 2, 3];
  let arrayOfObjects = [
    { name: "charan", age: 20, education: "b.tech" },
    { name: "Mahesh", age: 30, education: "Inter" },
    { name: "Manoj", age: 25, education: "M.com" },
    { name: "Ravi", age: 25, education: "M.tech" },
  ];
  function filterObject(array) {
    let fileterdObject = array.filter((eachintem) => {
      return eachintem.age == 25 && eachintem.name == "Ravi";
    });
    return fileterdObject;
  }
  function findObject(array) {
    let find = array.find((eachitem) => {
      return eachitem.age == 25;
    });
    return find;
  }
  let fileters = filterObject(arrayOfObjects);
  let finded = findObject(arrayOfObjects);
  console.log(finded);

  let sum = arrayOf.reduce((acumlator, values) => {
    return (acumlator += values);
  }, 0);
  console.log(sum);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Reduce;

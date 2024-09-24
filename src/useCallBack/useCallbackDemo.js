import React from "react";

const UseCallbackDemo = () => {
  let arr = [1, 2, 3, 33, 4, 4, 4];

  function removeDulpicates(arr) {
    return [...new Set(arr)];
  }

  console.log(removeDulpicates(arr));

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default UseCallbackDemo;

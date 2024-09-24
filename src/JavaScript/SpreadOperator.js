import React from "react";

const SpreadOperator = () => {
  var sum = 0;
  var subs = 0;
  var divs = 0;
  function div(numbers) {
    divs = sum / 2;
  }
  function sub(numbers) {
    numbers.map((eachnumber) => {
      return (subs -= eachnumber);
    });
  }
  function add(numbers) {
    numbers.map((eachnumber) => {
      return (sum += eachnumber);
    });
  }
  function calucate(func, ...values) {
    func(values);
  }
  function removeDuplicates(array) {
    return [...new Set(array)];
  }

  let newArray = removeDuplicates([1, 2, 3, 4, 4, 5, 55, 5]);
  console.log(newArray);

  calucate(add, 1, 2, 3, 4);
  calucate(sub, 1, 2, 3, 4);
  calucate(div, 1, 2, 3, 4);

  return (
    <div>
      <h2>Addition of numbers : {sum}</h2>
      <h2>Addition of numbers : {subs}</h2>
      <h2>Addition of numbers : {divs}</h2>
    </div>
  );
};

export default SpreadOperator;

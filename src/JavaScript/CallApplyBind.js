import React from "react";

const CallApplyBind = () => {
  let employeeObj = {
    name: "charan",
    age: 25,

    displayData: function (city, sex) {
      console.log(this);

      console.log(`${this.name} ${this.age} ${city} ${sex}`);
    },
  };
  let customer = {
    name: "charan",
    age: 25,
  };
  //   on call it executes when calling :
  employeeObj.displayData.call(customer, "nellore", "male");
  //   on Apply  it executes when calling :
  employeeObj.displayData.apply(customer, ["Hyderabad", "male"]);
  //   on bind  it executes only when it is called
  let handler = employeeObj.displayData.bind(customer, "Bangalore", "male");
  handler();
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default CallApplyBind;

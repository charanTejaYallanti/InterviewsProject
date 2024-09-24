import React from "react";

const Destructuring = () => {
  let odj = {
    name: "charan",
    age: 20,
    adress: {
      city: "nellore",
      state: "Ap",
      Country: "india",
    },
  };

  //   const {
  //     name,
  //     age,
  //     adress: { city, state, Country },
  //   } = odj;
  const { name, ...userifo } = odj;
  console.log(userifo);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default Destructuring;

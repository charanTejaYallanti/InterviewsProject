import React from "react";
import { UserContect } from "../App";

const UseReducerBasic = () => {
  return (
    <div>
      <UserContect.Consumer>
        {(value) => <div>{value}</div>}
      </UserContect.Consumer>
    </div>
  );
};

export default UseReducerBasic;

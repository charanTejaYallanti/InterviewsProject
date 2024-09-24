import React, { useContext } from "react";
import { UserContext } from "./UseContextApi";

export const GetDatafromContext = () => {
  const data = useContext(UserContext);
  const { firstName, email } = data;
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default GetDatafromContext;

import React, { useState } from "react";
export const UserContext = React.createContext();

export const UseContextApiProvider = ({ children }) => {
  const [state, setstate] = useState({
    firstName: "charan",
    email: "charan@gmail.com",
  });
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UseContextApiProvider;

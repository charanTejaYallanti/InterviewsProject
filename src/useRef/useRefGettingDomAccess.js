import React, { useRef } from "react";

const UseRefGettingDomAccess = () => {
  const domElement = useRef("");

  const changeState = () => {
    domElement.current.placeholder = "Enter Valid User";
    domElement.current.value = "";
    domElement.current.focus();
  };

  return (
    <div>
      <input ref={domElement} type="text" id="myButton1" placeholder="enter" />
      <input
        type="button"
        onClick={changeState}
        value="signed in"
        id="myButton1"
      />
    </div>
  );
};

export default UseRefGettingDomAccess;

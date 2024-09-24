import React, { useEffect } from "react";
import { useState, useRef } from "react";

const UseRefToStoreData = () => {
  const [state, setstate] = useState("");

  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        value={state}
        onChange={(e) => {
          setstate(e.target.value);
        }}
      />
      <h1>{state}</h1>
      <h1>{renderCount.current}</h1>
    </div>
  );
};

export default UseRefToStoreData;

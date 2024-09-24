import React, { useMemo, useState } from "react";

const UseMemoSimpleExp = () => {
  const [state, setstate] = useState(0);

  let num2 = 1;
  let num1 = 2;
  const sum = useMemo(() => {
    console.log("here");

    return num1 + num2;
  }, [num2, num1]);

  return (
    <div>
      <h1>Hi</h1>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        {state}
      </button>
      <h1>{sum}</h1>
    </div>
  );
};

export default UseMemoSimpleExp;

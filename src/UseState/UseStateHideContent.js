import React, { useState } from "react";

const DisplayHiddenContent = () => {
  const [ShowData, setData] = useState(false);
  function DisplayContent() {
    setData(!ShowData);
  }
  return (
    <div>
      <button onClick={DisplayContent}>{ShowData ? "hide" : "show"}</button>
      {ShowData ? (
        <div>Her we are Data is diplayed</div>
      ) : (
        <div>Data is Hidden</div>
      )}
    </div>
  );
};

export default DisplayHiddenContent;

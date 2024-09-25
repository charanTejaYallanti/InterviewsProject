import React from "react";
import "./App.css";
import AccountDisplay from "./Redux/AccountDisplay.js";
import Form from "./Redux/form.js";
import "./Redux/store.js";
import "./Redux/form.js";
function App() {
  return (
    <div>
      <Form />
      <AccountDisplay />
    </div>
  );
}

export default App;

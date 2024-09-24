import React, { useState } from "react";

const UseStateFormHandling = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = {
      firstname: firstName,
      email: email,
      password: password,
    };
    console.log(firstName + " " + email + " " + password);
  };
  return (
    <div>
      <form className="simple-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            id="pass"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <div>Welcome {firstName}</div>
      </form>
    </div>
  );
};

export default UseStateFormHandling;

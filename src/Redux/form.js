import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [userName, setuserName] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          typeof="text"
          placeholder="enter Amount"
          id="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "DEPOSIT", payload: amount });
            setAmount(" ");
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "WITHDRAW", payload: amount });
            setAmount(" ");
          }}
        >
          Withdraw
        </button>
        <input
          typeof="text"
          placeholder="enter your Name"
          id="accountHolderName"
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "ACCOUNT_HOLDER_NAME_UPDATE", payload: userName });
            setuserName(" ");
          }}
        >
          Update
        </button>
        <input
          typeof="text"
          placeholder="enter your Mobile Number"
          id="MobileNumber"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "MOBILE_UPDATE", payload: mobile });
            setMobile(" ");
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          RESET
        </button>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import { useSelector } from "react-redux";

const AccountDisplay = () => {
  const data = useSelector((state) => state);
  return (
    <div>
      Account Details
      <table>
        <thead>
          <tr>
            <th>Account Holder Name</th>
            <th>Balance</th>
            <th>phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.accoutHolderName}</td>
            <td>{data.balance}</td>
            <td>{data.mobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountDisplay;

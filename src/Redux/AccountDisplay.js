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
            <td>{data.account.accoutHolderName}</td>
            <td>{data.account.balance}</td>
            <td>{data.account.mobileNumber}</td>
          </tr>
        </tbody>
      </table>
      Transaction Details
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.transaction.map((eachobj, index) => {
            return (
              <tr key={eachobj.id}>
                <td>{eachobj.id}</td>
                <td>{eachobj.amount}</td>
                <td>{eachobj.date.toString()}</td>
                <td>{eachobj.type}</td>
                <td>{data.account.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AccountDisplay;

import React from "react";

const RestOperator = () => {
  let productList = {
    productName: "laptop",
    price: 1000,
    model: "CQER123JU",
  };
  let productListArray = [1, 2, 3, 4];
  let orderedListArray = [...productListArray];
  orderedListArray.push(5);
  let ortderList = { ...productList, Quantity: 1 };

  return (
    <div>
      <div>
        <h1>PRODUCT LIST:</h1>
        <h2>{productList.productName}</h2>
        <h2>{productList.model}</h2>
        <h2>{productList.price}</h2>
        <h2>{productList.Quantity}</h2>
      </div>
      <div>
        <h1>ORDERED LIST:</h1>
        <h2>{ortderList.productName}</h2>
        <h2>{ortderList.model}</h2>
        <h2>{ortderList.price}</h2>
        <h2>{ortderList.Quantity}</h2>
      </div>
      <div>
        Orderd list :<h1>{orderedListArray}</h1>
      </div>
      <div>
        Product LIst :<h1>{productListArray}</h1>
      </div>
    </div>
  );
};

export default RestOperator;

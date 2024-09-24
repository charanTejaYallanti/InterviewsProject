import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectFetchingDataUsingAxios = () => {
  const [userData, setUserData] = useState([]);
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const fetchdata = async (url) => {
    axios
      .get(url)
      .then((res) => setUserData(res.data.drinks))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata(url);
  }, []);

  return (
    <div>
      {userData.map((eachObj) => {
        return (
          <div key={eachObj.idDrink} className="Displays">
            <div>Drink Name :{eachObj.strDrink}</div>
            <div>Category :{eachObj.strCategory}</div>
            <div>Glass :{eachObj.strGlass}</div>
            <img className="drink-image" src={eachObj.strDrinkThumb} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectFetchingDataUsingAxios;

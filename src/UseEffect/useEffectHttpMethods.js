import React, { useEffect } from "react";
import axios from "axios";

const UseEffectHttpMethods = () => {
  const postUrl = "https://reqres.in/api/users";
  const puturl = "https://reqres.in/api/users/2";
  const deleteurl = "https://reqres.in/api/users/2";
  const postData = async (url) => {
    axios
      .post(url, { name: "morpheus", job: "leader" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const putData = async (url) => {
    axios
      .put(url, { name: "morpheus", job: "zion resident" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const deleteData = async (url) => {
    axios
      .delete(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    postData(postUrl);
    putData(puturl);
    deleteData(deleteurl);
  }, []);

  return (
    <div>
      <h1>Her we are </h1>
    </div>
  );
};

export default UseEffectHttpMethods;

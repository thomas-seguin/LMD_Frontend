import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookie";

const Success = ({ values }) => {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/registration_api/token",
        values
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("users/profile");
  });
  const myJSON = JSON.stringify(values);
  return <div>{myJSON}</div>;
};

export default Success;

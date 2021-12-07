import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Success = ({ values }) => {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .post(
        "https://wasp-last-mile-delivery.herokuapp.com/registration_api/driver",
        values
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/drivers/profile");
  });
  const myJSON = JSON.stringify(values);
  return <div>{myJSON}</div>;
};

export default Success;

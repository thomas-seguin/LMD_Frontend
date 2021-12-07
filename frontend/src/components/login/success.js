import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

const Success = ({ values }) => {
  let navigate = useNavigate();
  useEffect(() => {
    var querystring = require("querystring");
    const stringified = querystring.stringify({
      username: values.email,
      password: values.password,
      scope: values.scope,
    });
    const cookies = new Cookies();

    console.log(stringified);

    axios
      .post(
        "https://wasp-last-mile-delivery.herokuapp.com/registration_api/token",
        stringified,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (res) {
        console.log(res.data.access_token);
        // had to do it client side since server side do not work
        cookies.set("access_token", res.data.access_token, {
          path: "/",
        });
        console.log("Cookies: ", cookies.getAll());
      })
      .catch(function (error) {
        console.log(error);
      });

    navigate("drivers/profile");
    console.log(values.email);
  });
  const myJSON = JSON.stringify(values);
  return <div>{myJSON}</div>;
};

export default Success;

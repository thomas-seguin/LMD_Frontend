import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const authContext = createContext();

function useAuth() {
  const [authed, setAuthed] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    // check if the browser local storage have a jwt token, and if so then setAuthed(true)
    const accessToken = cookies.get("access_token");

    if (accessToken) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  });

  const currentUser = () => {
    const accessToken = cookies.get("access_token");
    const userType = cookies.get("scope");

    return new Promise((resolve, reject) => {
      if (!accessToken) {
        return resolve(null);
      }

      axios
        .get(
          `https://wasp-last-mile-delivery.herokuapp.com/registration_api/${userType}/me`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const login = (email, password, scope) => {
    var querystring = require("querystring");
    const stringified = querystring.stringify({
      // grant_type: "password_credentials",
      username: email,
      password: password,
      scope: scope,
    });

    return new Promise((resolve, reject) => {
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
          cookies.set("scope", scope, {
            path: "/",
          });
          console.log("Cookies: ", cookies.getAll());
          setAuthed(true);
          resolve();
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  };

  const logout = () => {
    return new Promise((resolve) => {
      cookies.remove("access_token");
      cookies.remove("scope");
      setAuthed(false);
      cookies.remove("access_token");
      cookies.remove("scope");
      resolve(true);
    });
  };

  return {
    authed,
    currentUser,
    login,
    logout,
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}

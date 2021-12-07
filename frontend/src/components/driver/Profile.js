import React, { Fragment, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Form } from "../index";
import avatar from "../img/avatar7.png";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const fetchData = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");
  const userType = cookies.get("scope");
  return axios
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
      console.log("1");
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    vehicle: {
      color: "",
      insurancePolicy: "",
      licensePlateNumber: "",
      make: "",
      model: "",
      storageCapacity: "",
    },
    driversLicence: {
      number: "",
    },
  });

  useEffect(() => {
    fetchData().then((data) => {
      setUserData(data);
      console.log(userData.email);
    });
  }, []);

  return (
    <Fragment>
      <div className="grid-container">
        <div className="header">
          <h1>{userData.firstName}</h1>
        </div>
        <div className="pic">
          <img src={avatar} alt="BigCo Inc. logo" />
          <p>{userData.firstName}</p>
          <p>{userData.email}</p>
        </div>
        <div className="main">
          <h3>Profile Settings</h3>
          <Container component="main" maxWidth="xs">
            <form>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="first name"
                    label={userData.firstName}
                    // onChange={handleChange2("make")}
                    value={userData.firstName}
                    // variant="outlined"
                    autoComplete="make"
                    fullWidth
                  />
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="Last Name"
                    label="Last Name"
                    // onChange={handleChange2("lastName")}
                    value={userData.lastName}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Email"
                    label="Email"
                    // onChange={handleChange2("color")}
                    value={userData.email}
                    autoComplete="color"
                    fullWidth
                  />
                </Grid>

                {/* phone num */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Phone Number"
                    label="Phone Number"
                    // onChange={handleChange2("licensePlateNumber")}
                    value={userData.phoneNumber}
                    fullWidth
                  />
                </Grid>
                {/*Make */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="make"
                    label={userData.vehicle.make}
                    // onChange={handleChange2("make")}
                    value={userData.vehicle.make}
                    // variant="outlined"
                    autoComplete="make"
                    fullWidth
                  />
                </Grid>
                {/* Model*/}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="Model"
                    label="Model"
                    // onChange={handleChange2("lastName")}
                    value={userData.vehicle.model}
                  />
                </Grid>

                {/* color */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Color"
                    label="Color"
                    // onChange={handleChange2("licensePlateNumber")}
                    value={userData.vehicle.color}
                    fullWidth
                  />
                </Grid>

                {/* Storage */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Storage"
                    label="Storage"
                    // onChange={handleChange2("licensePlateNumber")}
                    value={userData.vehicle.storageCapacity}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    // onClick={Continue}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

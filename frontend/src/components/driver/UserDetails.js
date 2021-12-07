import React, { Fragment } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const UserDetails = ({ nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form>
            <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <br />
              {/* firstName */}
              <Grid item xs={12}>
                <TextField
                  placeholder="firstName"
                  label="First Name"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  // variant="outlined"
                  autoComplete="firstName"
                  fullWidth
                />
              </Grid>
              <br />
              <br />
              {/* lastName */}
              <Grid item xs={12}>
                <TextField
                  placeholder="lastName"
                  label="Last Name"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  // variant="outlined"
                  autoComplete="lastName"
                  fullWidth
                />
              </Grid>
              <br />
              <br />
              {/* phoneNumber */}
              <Grid item xs={12}>
                <TextField
                  placeholder="phoneNumber"
                  label="Phone Number"
                  onChange={handleChange("phoneNumber")}
                  defaultValue={values.phoneNumber}
                  // variant="outlined"
                  autoComplete="phoneNumber"
                  fullWidth
                />
              </Grid>
              <br />
              {/* password */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange("encryptedPassword")}
                  defaultValue={values.encryptedPassword}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                  type="password"
                />
              </Grid>
            </Grid>
            <br />
            <Button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default UserDetails;

import React, { Fragment, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LicenseData = ({ prevStep, nextStep, handleChange3, values }) => {
  const [startDate, setStartDate] = useState(new Date());
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
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
              {/* dNum */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="number"
                  label="Driver License Number"
                  onChange={handleChange3("number")}
                  defaultValue={values.driversLicence.number}
                />
              </Grid>
              {/* expiryDate */}
              <Grid item xs={12} sm={6}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    values.driversLicence.expiryDate = startDate;
                  }}
                />
              </Grid>

              {/* photoURL */}
              <Grid item xs={12}>
                <TextField
                  placeholder="photoURL"
                  label="Photo URL"
                  onChange={handleChange3("photoUrl")}
                  defaultValue={values.driversLicence.photoUrl}
                  autoComplete="photoUrl"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  onClick={Previous}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Previous
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={Continue}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default LicenseData;

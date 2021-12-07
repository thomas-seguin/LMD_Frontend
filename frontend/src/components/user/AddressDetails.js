import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const AddressDetails = ({ prevStep, nextStep, handleChange2, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* Addressline 1 */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="addressLine1"
                label="addressLine1"
                onChange={handleChange2("addressLine1")}
                defaultValue={values.address.addressLine1}
                // variant="outlined"
                autoComplete="addressLine1"
                fullWidth
              />
            </Grid>
            {/* city */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="city"
                label="city"
                onChange={handleChange2("city")}
                defaultValue={values.address.city}
              />
            </Grid>

            {/* state */}
            <Grid item xs={12}>
              <TextField
                placeholder="state"
                label="state"
                onChange={handleChange2("state")}
                defaultValue={values.address.state}
                autoComplete="state"
                fullWidth
              />
            </Grid>

            {/* country */}
            <Grid item xs={12}>
              <TextField
                placeholder="country"
                label="country"
                onChange={handleChange2("country")}
                defaultValue={values.address.country}
                autoComplete="country"
                fullWidth
              />
            </Grid>
            {/* postalcode */}
            <Grid item xs={12}>
              <TextField
                placeholder="postalCode"
                label="postalCode"
                onChange={handleChange2("postalCode")}
                defaultValue={values.address.postalCode}
                autoComplete="postalCode"
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
  );
};

export default AddressDetails;

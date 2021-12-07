import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const VehicleDetails = ({ prevStep, nextStep, handleChange2, values }) => {
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
              {/* Make */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Make"
                  label="Make"
                  onChange={handleChange2("make")}
                  defaultValue={values.vehicle.make}
                  // variant="outlined"
                  autoComplete="make"
                  fullWidth
                />
              </Grid>
              {/* model */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="model"
                  label="model"
                  onChange={handleChange2("model")}
                  defaultValue={values.vehicle.model}
                />
              </Grid>

              {/* color */}
              <Grid item xs={12}>
                <TextField
                  placeholder="color"
                  label="Color"
                  onChange={handleChange2("color")}
                  defaultValue={values.vehicle.color}
                  autoComplete="color"
                  fullWidth
                />
              </Grid>

              {/* lNum */}
              <Grid item xs={12}>
                <TextField
                  placeholder="License Plate Number"
                  label="License Plate Number"
                  onChange={handleChange2("licensePlateNumber")}
                  defaultValue={values.vehicle.licensePlateNumber}
                  autoComplete="licensePlateNumber"
                  fullWidth
                />
              </Grid>
              {/* insurPolicy */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Insurance Policy"
                  label="Insurance Policy"
                  onChange={handleChange2("insurancePolicy")}
                  defaultValue={values.vehicle.insurancePolicy}
                  autoComplete="insurancePolicy"
                  fullWidth
                />
              </Grid>
              {/* storageCap */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Storage Capacity"
                  label="Storage Capacity"
                  onChange={handleChange2("storageCapacity")}
                  defaultValue={values.vehicle.storageCapacity}
                  autoComplete="storageCapacity"
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

export default VehicleDetails;

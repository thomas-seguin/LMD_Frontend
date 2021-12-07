import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Success from "./Success";
import VehicleDetails from "./VehicleDetails";
import LicenseData from "./LicenseData";
import moment from "moment";

export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    encryptedPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    vehicle: {
      make: "test",
      model: "",
      color: "",
      licensePlateNumber: "",
      insurancePolicy: "",
      storageCapacity: "",
    },
    driversLicence: {
      number: "",
      expiryDate: moment(),
      focused: false,
      photoUrl: "",
    },
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    console.log(this.state.vehicle.make);
    this.setState({ [input]: e.target.value });
  };

  handleChange2 = (input) => (e) => {
    this.setState({
      vehicle: { ...this.state.vehicle, [input]: e.target.value },
    });
  };

  handleChange3 = (input) => (e) => {
    this.setState({
      driversLicence: { ...this.state.driversLicence, [input]: e.target.value },
    });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      encryptedPassword,
      firstName,
      lastName,
      phoneNumber,
      vehicle: {
        make,
        model,
        color,
        licensePlateNumber,
        insurPolicy,
        storageCapacity,
      },
      driversLicence: { number, expiryDate, photoUrl },
    } = this.state;
    const values = {
      email,
      encryptedPassword,
      firstName,
      lastName,
      phoneNumber,
      vehicle: {
        make,
        model,
        color,
        licensePlateNumber,
        insurPolicy,
        storageCapacity,
      },
      driversLicence: {
        number,
        expiryDate,
        photoUrl,
      },
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <VehicleDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange2={this.handleChange2}
            values={values}
          />
        );
      case 3:
        return (
          <LicenseData
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange3={this.handleChange3}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
      // do nothing
    }
  }
}

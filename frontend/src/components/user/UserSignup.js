import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Success from "./Success";
import AddressDetails from "./AddressDetails";

export default class UserSignup extends Component {
  state = {
    step: 1,
    email: "",
    encryptedPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",

    address: {
      addressLine1: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
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
    this.setState({ [input]: e.target.value });
  };

  handleChange2 = (input) => (e) => {
    this.setState({
      address: { ...this.state.address, [input]: e.target.value },
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

      address: { addressLine1, city, state, country, postalCode },
    } = this.state;
    const values = {
      email,
      encryptedPassword,
      firstName,
      lastName,
      phoneNumber,

      address: {
        addressLine1,
        city,
        state,
        country,
        postalCode,
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
          <AddressDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange2={this.handleChange2}
            values={values}
          />
        );
      case 3:
        return <Success values={values} />;
      default:
      // do nothing
    }
  }
}

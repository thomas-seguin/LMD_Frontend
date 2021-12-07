import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Success from "./success";

export default class Login extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    scope: "drivers",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, password, scope } = this.state;
    const values = {
      email,
      password,
      scope,
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
        return <Success values={values} />;
      default:
      // do nothing
    }
  }
}

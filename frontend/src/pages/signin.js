import React, { useState, Fragment } from "react";
import axios from "axios";
import { Form } from "../components";
import useAuth from '../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom'


export default function Signin({scope}) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  
  const handleSignin = (e) => {
    e.preventDefault();
  
    login(emailAddress, password, scope).then(() => {
      navigate((state && state.path) || `/${scope}/dashboard`);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Fragment>
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />

          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>
      </Form>
    </Fragment>
  );
}

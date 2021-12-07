import React, { Fragment } from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/login";
import { Navbar } from "./components/layout";
import { RequireAuth } from "./components/requireAuth";
import Drivers from "./pages/drivers";
import Users from "./pages/users";
import Home from "./pages/home";
import Signup from "./components/driver/Signup";
import UserSignup from "./components/user/UserSignup";
import { Signin } from "./pages/index";
import { AuthProvider } from "./hooks/useAuth";

import "./App.css";
import Profile from "./components/driver/Profile";
import UserProfile from "./components/user/UserProfile";
import Dashboard from "./components/driver/Dashboard";
import { Dashboard as UserDashboard } from "./components/user/Dashboard";

export default function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/users" element={<Users />} />
            <Route path="/drivers/signup" element={<Signup />} />
            <Route path="/users/signup" element={<UserSignup />} />
            <Route
              path="/driver/login"
              element={<Signin scope={"drivers"} />}
            />
            <Route path="/user/login" element={<Signin scope={"users"} />} />
            <Route
              path="/users/dashboard"
              element={
                <RequireAuth scope={"users"}>
                  <UserDashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/drivers/dashboard"
              element={
                <RequireAuth scope={"drivers"}>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/drivers/profile"
              element={
                <RequireAuth scope={"drivers"}>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/users/profile"
              element={
                <RequireAuth scope={"users"}>
                  <UserProfile />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}

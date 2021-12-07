import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Last Mile Delivery</h1>
          <p className="lead">Last Mile Delivery Service</p>
          <h1>
            <Link to="/users">
              <i className="fas fa-ticket-alt"></i> Users
            </Link>
          </h1>
          <h1>
            <Link to="/drivers">
              <i className="fas fa-ticket-alt"></i> Drivers
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Landing;

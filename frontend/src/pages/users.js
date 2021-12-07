import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Last Mile Delivery</h1>
            <p className="lead">
              Deliveries Need to be made now Sign up to learn more
            </p>
            <h1>
              <Link to="/users/signup">
                <i className="fas fa-ticket-alt"></i> Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

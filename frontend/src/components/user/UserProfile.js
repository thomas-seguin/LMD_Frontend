import React, { Fragment, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export default function UserProfile() {
  return (
    <Fragment>
      <div className="header">
        <h1>Profile Settings</h1>
      </div>

      <h2 className="m-1">Past Deliveries</h2>
      <div className="profile bg-light">
        <div>
          <h2>Delivery 1</h2>
          <h3>Delivered on October 31</h3>
          <h3>40 Blanchard Crescent</h3>
        </div>
        <div>
          <h2>Delivery 2</h2>
          <h3>Delivered on November 2</h3>
          <h3>123 My Street</h3>
        </div>
      </div>

      <h2 className="m-1">Current Outstanding Deliveries</h2>
      <div className="profile bg-light">
        <div className="m-1">
          <h2>Retailer 1</h2>
          <h3>Lumber Shipment</h3>
          <h3>40 Blanchard Crescent</h3>
          <button type="button" className="btn btn-primary">
            Book Delivery
          </button>
        </div>
        <div className="m-1">
          <h2>Retailer 2</h2>
          <h3>Steel Shipment</h3>
          <h3>123 My Street</h3>
          <button type="button" className="btn btn-primary">
            Book Delivery
          </button>
        </div>
      </div>
    </Fragment>
  );
}

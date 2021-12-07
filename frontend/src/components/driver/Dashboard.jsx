import React, { Fragment, useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState("1");
  return (
    <Fragment>
      <h1 className="asdf">Dashboard</h1>
      <div className="flex-container">
        <div className="flex1">
          <button className="bbutton m-1" onClick={(e) => setView("1")}>
            Upcoming Deliveries
          </button>
          <br />
          <button className="bbutton m-1" onClick={() => setView("2")}>
            Next Week Schedule
          </button>
          <br />
          <button className="bbutton m-1" onClick={() => setView("3")}>
            Past Deliveries
          </button>
        </div>
        <div className="flex2">
          <h3 className="qwer">Deliveries</h3>
          {view === "1" && (
            <div>
              <div className="m-1">
                <h4>Retailer 1</h4>
                <p>Lumber Shipment</p>
                <p>December 31 2021</p>
                <p>31 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 2</h4>
                <p>Nail Shipment</p>
                <p>December 30 2021</p>
                <p>32 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 3</h4>
                <p>Wood Shipment</p>
                <p>December 29 2021</p>
                <p>33 First Street</p>
              </div>
            </div>
          )}
          {view === "2" && (
            <div>
              <div className="m-1">
                <h4>Retailer 1</h4>
                <p>Clothing Shipment</p>
                <p>November 26</p>
                <p>31 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 2</h4>
                <p>Toy Shipment</p>
                <p>November 27</p>
                <p>32 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 3</h4>
                <p>Computer Shipment</p>
                <p>November 28</p>
                <p>33 First Street</p>
              </div>
            </div>
          )}
          {view === "3" && (
            <div>
              <div className="m-1">
                <h4>Retailer 1</h4>
                <p>Iron Shipment</p>
                <p>September 1 2021</p>
                <p>31 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 2</h4>
                <p>Copper Shipment</p>
                <p>January 8 2021</p>
                <p>32 First Street</p>
              </div>
              <div className="m-1">
                <h4>Retailer 3</h4>
                <p>Gold Shipment</p>
                <p>March 4 2021</p>
                <p>33 First Street</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

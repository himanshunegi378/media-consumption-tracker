import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{ zIndex: 300 }}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          M:Tracker
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavigationBar;

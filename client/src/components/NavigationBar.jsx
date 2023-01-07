import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../assets/billit-logo.png";
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="py-0">
          <img
            alt="billit logo"
            src={logo}
            width="auto"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

import React from "react";
import { Container, Navbar as NavbarB } from "react-bootstrap";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <NavbarB bg="dark" variant="dark" className="mb-2">
      <Container>
        <NavbarB.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          STW Token Web Interface
        </NavbarB.Brand>
      </Container>
    </NavbarB>
  );
}

export default Navbar;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" id="header" className="py-3">
      <Navbar.Brand>
        <h1 className="font-weight-bold">Odin CV</h1>
      </Navbar.Brand>
      <Nav>
        <Button
          variant="outline-info"
          href="https://github.com/jvfe/odin-cv/"
          target="_blank"
        >
          Source Code
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;

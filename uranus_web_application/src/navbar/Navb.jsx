import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navb(props) {
  const authNavDetails = props.user ? (
    <>
      <Nav.Link as={Link} to="/profile">
        {props.user.first_name}
      </Nav.Link>
      <Nav.Link as={Link} to="/logout" onClick={props.logout}>
        Logout
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link as={Link} to="/login">
        Signin
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Signup
      </Nav.Link>
      {/* <Nav.Link as={Link} to="/registerTeacher">
        SignupT
      </Nav.Link>
      <Nav.Link as={Link} to="/registerStudent">
        SignupS
      </Nav.Link> */}
    </>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand>PLACEHOLDER</Navbar.Brand>
          <Nav.Link as={Link} to="#">
            Majors
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            Contact
          </Nav.Link>
        </Nav>
        <Nav>{authNavDetails}</Nav>
      </Navbar>
    </div>
  );
}

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#Home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/pages/AboutUs">About Us</Nav.Link>
          <Nav.Link href="/pages/ContactUs">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/pages/Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

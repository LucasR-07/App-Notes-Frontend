import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './styles/Navigation.css'

export default class Navigation extends Component {

  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/notes-app-frontend">
          <Navbar.Brand>Notes App</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/notes-app-frontend">
              <button className="btn btn-outline-danger border-0 rounded-pill text-light navBoton mr-3">Notes</button>
            </Link>
            <Link to="/notes-app-frontend/create">
              <button className="btn btn-outline-danger border-0 rounded-pill text-light navBoton mr-3">Create Note</button>
            </Link>
            <Link to="/notes-app-frontend/user">
              <button className="btn btn-outline-danger border-0 rounded-pill text-light navBoton">Create User</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
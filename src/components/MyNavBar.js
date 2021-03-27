import "./MyNavBar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const MyNavBar = () => {
  const getNameFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.fullName : "User";
  };

  const isLoggedIn = localStorage.getItem("user");

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Navbar.Brand href="#" className="Fitnesslogo p-0">
          Fitness Mantra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="mx-3 mt-2 navbarlinks " to="/">
              Home
            </Link>
            <Link className="mx-3 mt-2 navbarlinks " to="/about">
              About Us
            </Link>
            <Link className="mx-3 mt-2 navbarlinks " to="/contact_us">
              Contact Us
            </Link>
            <Link className="mx-3 mt-2 navbarlinks " to="/store">
              Store
            </Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {getNameFromLocalStorage()}
              </DropdownToggle>
              <DropdownMenu right>
                {isLoggedIn ? (
                  <Link className="navbarLogin" to="/">
                    <DropdownItem onClick={() => localStorage.clear()}>
                      Logout
                    </DropdownItem>
                  </Link>
                ) : (
                  <>
                    <Link className="navbarLogin" to="/login">
                      <DropdownItem>Login</DropdownItem>
                    </Link>
                    <Link className="navbarLogin" to="/register">
                      <DropdownItem>SignUp</DropdownItem>
                    </Link>
                  </>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavBar;

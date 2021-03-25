import './MyNavBar.css'
import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const MyNavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                <Navbar.Brand href="#" className="Fitnesslogo p-0">Fitness Mantra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="mx-3 mt-2 navbarlinks " to='/'>Home</Link>
                        <Link className="mx-3 mt-2 navbarlinks " to='/about'>About Us</Link>
                        <Link className="mx-3 mt-2 navbarlinks " to='/contact_us'>Contact Us</Link>
                        <Link className="mx-3 mt-2 navbarlinks " to='/store'>Store</Link>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Prime
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link  className="navbarLogin" to='/user_login'>
                                <DropdownItem>Login</DropdownItem>
                            </Link>
                            <Link className="navbarLogin" to='/user_registration'>
                                <DropdownItem>SignUp</DropdownItem>
                            </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavBar

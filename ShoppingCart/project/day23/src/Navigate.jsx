import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navi.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigate() {
  return (
   <>
    <div >
    <Navbar variant="dark" bg="dark" expand="lg">
      
        <Navbar.Toggle aria-controls="navbar-dark-example"  id="navigate"/>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Shop"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  
        <Card.Img variant="top" src="header.png" id= "header"/>

    </div>
   
   </>
  )
}

export default Navigate
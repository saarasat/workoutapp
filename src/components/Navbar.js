import React from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Sporttivartti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Workouts</Nav.Link>
            <NavDropdown title="Placeholder" id="basic-nav-dropdown">
              <NavDropdown.Item href="#placeholder">placeholder</NavDropdown.Item>
              <NavDropdown.Item href="#placeholder">placeholder</NavDropdown.Item>
              <NavDropdown.Item href="#placeholder">placeholder</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">placeholder</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar

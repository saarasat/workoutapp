import React from 'react'
import Home from './components/Home'
import StopWatch from './components/Stopwatch'
import Navigationbar from './components/Navbar'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

import Settings from './components/Settings'
import TimesList from './components/TimesList'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

const App = ({ store }) => {


  return (
    <div className="container" align="center">
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Sporttivartti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/times">Times</Link></Nav.Link>
                <Nav.Link><Link to="/stopwatch">Stopwatch</Link></Nav.Link>
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

        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/times" render={() => <TimesList store={store} />} />
        <Route exact path="/stopwatch" render={() => <StopWatch store={store}/>} />
        <Route exact path="/settings" render={() => <Settings store={store}/>} />
        
      </Router>
    </div>
  )
}

export default App
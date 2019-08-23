import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import Home from './components/Home'
import StopWatch from './components/Stopwatch'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import NewMap from './components/Map'
import Settings from './components/Settings'
import TimesList from './components/TimesList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import timeReducer from './reducers/timeReducer'


const reducer = timeReducer

const store = createStore(reducer)


export const MapContainer = (props) => {
  return (
    <div>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Sporttivartti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/times">Times</Nav.Link>
                <Nav.Link to="/stopwatch">Stopwatch</Nav.Link>
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
        <div className="container" align="center">

          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/times" render={() => <TimesList store={store} />} />
          <Route exact path="/stopwatch" render={() => <StopWatch store={store}/>} />
          <Route exact path="/settings" render={() => <Settings store={store}/>} />
        </div>

      </Router>
      <div className="container">
        <NewMap google={props.google}/>
      </div>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)
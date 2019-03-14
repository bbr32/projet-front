import React, { Component } from 'react';
import './App.css';
import { Row, Container, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Routes from './routes';

const navlink = {
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block',
  width: '100%',
  padding: '0.8em 1em'
};

class App extends Component {

  render() {
    return (
      <Container fluid={true} className="App">
        <Row>
          <Col md={2} sm={3} className="bg-dark sidebar text-light px-0 py-2">
            <div className="sidebar-sticky">
              <h3 className="text-center py-2">Dashboard</h3>
              <br className="py-4" />
              <ul>
                <li><NavLink exact to="/" style={navlink} activeClassName="side-menu-active">Data</NavLink></li>
                <li><NavLink exact to="/weather" style={navlink} activeClassName="side-menu-active">Weather</NavLink></li>
                <li><NavLink exact to="/calendar" style={navlink} activeClassName="side-menu-active">Calendar</NavLink></li>
              </ul>
            </div>
          </Col>
          <Col md={10} sm={9}>
            <Routes />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
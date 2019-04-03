import React, { Component } from 'react';
import './App.css';
import { Row, Container, Col, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Routes from './routes';
import { FaBars } from 'react-icons/fa';

const navlink = {
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block',
  width: '100%',
  padding: '0.8em 1em'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
     <Container fluid={true} className="App">
        <Row>
          <Col style={{position: "fixed"}} lg={2} md={3} sm={4} className="bg-dark sidebar text-light px-0 py-2 ">
            <h3 className="text-center py-2">Dashboard</h3>
            <br className="py-4" />
            <ul>
              <li><NavLink exact to="/" style={navlink} activeClassName="side-menu-active">Database</NavLink></li>
              <li><NavLink exact to="/charts" style={navlink} activeClassName="side-menu-active">Charts</NavLink></li>
              <li><NavLink exact to="/weather" style={navlink} activeClassName="side-menu-active">Weather</NavLink></li>
              <li><NavLink exact to="/calendar" style={navlink} activeClassName="side-menu-active">Calendar</NavLink></li>
              <li><NavLink exact to="/form" style={navlink} activeClassName="side-menu-active">Add artist</NavLink></li>
            </ul>
          </Col>
          <Col sm={12} className="bg-dark nav-small px-0">
            <FaBars size={28} className="menu" onClick={this.toggle} />
            <Collapse isOpen={this.state.collapse}>
              <ul>
                <li><NavLink exact to="/" style={navlink} activeClassName="side-menu-active">Database</NavLink></li>
                <li><NavLink exact to="/charts" style={navlink} activeClassName="side-menu-active">Charts</NavLink></li>
                <li><NavLink exact to="/weather" style={navlink} activeClassName="side-menu-active">Weather</NavLink></li>
                <li><NavLink exact to="/calendar" style={navlink} activeClassName="side-menu-active">Calendar</NavLink></li>
                <li><NavLink exact to="/form" style={navlink} activeClassName="side-menu-active">Add artist</NavLink></li>
              </ul>
            </Collapse>
          </Col>
          <Col lg={{ size: 10, offset: 2}} md={{ size: 9, offset: 3}} sm={{ size: 8, offset: 4}}>
            <Routes/>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default App;
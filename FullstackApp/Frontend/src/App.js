import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import First from './components/First';
import Services from './components/Services';
import Muscle from './components/Muscle';

import Home from './components/Home';

import './App.css';
import MeditationExercises from './components/MedidationExercise';
// import Bhariheading from './components/Bhariheading';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar className="navbar-with-shadow" bg="light" expand="lg">
          <Container className="ret">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={NavLink} to="/signin">
                  Signin
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/Bhariheading" element={<Bhariheading />} /> */}
          <Route path="/Services" element={<Services />} />
          <Route path="/Muscle" element={<Muscle />} />
          <Route path="/First" element={<First />} />
          <Route path="/MeditationExercises" element={<MeditationExercises />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;

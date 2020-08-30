import React from "react";
import {Container} from "reactstrap"
// using router-react to link to each page
import {BrowserRouter, Route, Link} from "react-router-dom";
import { Nav, NavLink } from 'reactstrap';
// importing each component to the app
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div>
          <Nav>
            <NavLink href="/">About</NavLink> 
            <NavLink href="/projects">Projects</NavLink> 
            <NavLink href="/contact">Contact</NavLink> 
          </Nav>
            <Route exact path="/" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;

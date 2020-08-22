// App.jsx
import React from "react";
// Replace SVG file with your logo
import logo from "./logo.svg";
// using router-react to link to each page
import {BrowserRouter, Route, Link} from "react-router-dom";
// importing each component to the app
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projects" component={Projects}/>

      <div className="navigation">
        <img src={logo} className="logo-image" alt="Jessica Edens Logo" />
        <div className="navigation-sub">
          <Link to="/" className="item">About</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

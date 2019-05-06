import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Createform from "./components/create-form.component";
import Editform from "./components/edit-form.component";
import formsList from "./components/forms-list.component";

import logo from "./logo.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/mrchandrabhan" target="_blank">
              <img src={logo} width="80" height="50" alt="github.com/mrchandrabhan" />
            </a>
            <Link to="/" className="navbar-brand">Contact Form</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create form</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={formsList} />
          <Route path="/edit/:id" component={Editform} />
          <Route path="/create" component={Createform} />
        </div>
      </Router>
    );
  }
}

export default App;

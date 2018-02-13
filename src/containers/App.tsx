import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Login } from "../components/auth/Login";
import Navbar from "../components/navbar/Navbar";
import "./App.sass";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default () => (
  <Router>
    <div>
      <Navbar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

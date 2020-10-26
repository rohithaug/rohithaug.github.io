import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Others from "./components/others";

function App() {
  return (
    <div className="content">
      <Helmet>
        <style>{"body { background-color: #1d1d1d; }"}</style>
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Others} />
      </Switch>
    </div>
  );
}

export default App;

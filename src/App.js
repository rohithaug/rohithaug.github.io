import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;

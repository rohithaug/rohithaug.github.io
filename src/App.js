// IMPORT LIBRARIES
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// IMPORT CONTAINERS
import Navbar from "./containers/navbar";

// IMPORT PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>          
    </HashRouter>
  );
}

export default App;

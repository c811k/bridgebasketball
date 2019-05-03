import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Players from "./components/pages/Players";
import Scores from "./components/pages/Scores";
import Schedule from "./components/pages/Schedule/Schedule";
import May from "./components/pages/Schedule/May";
import Standing from "./components/pages/Standing";
import Stats from "./components/pages/Stats";
import Rules from "./components/pages/Rules";
import "./App.css";
import Teamstats from "./components/pages/Teamstats";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/scores" component={Scores} />
            <Route path="/schedule" component={Schedule} />
            <Route exact path="/standing" component={Standing} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/teamstats" component={Teamstats} />
            <Route exact path="/rules" component={Rules} />
          </div>
        </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Players from "./components/pages/Players";
import Week1 from "./components/pages/Scores/Week1";
import Week2 from "./components/pages/Scores/Week2";
import Week3 from "./components/pages/Scores/Week3";
import Schedule from "./components/pages/Schedule/Schedule";
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
            <Route exact path="/scores/week1" component={Week1} />
            <Route exact path="/scores/week2" component={Week2} />
            <Route exact path="/scores/week3" component={Week3} />
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

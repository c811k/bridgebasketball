import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Players1 from "./components/pages/Players/1";
import Players2 from "./components/pages/Players/2";
import Players3 from "./components/pages/Players/3";
import Players4 from "./components/pages/Players/4";
import Players5 from "./components/pages/Players/5";
import Players6 from "./components/pages/Players/6";
import Players7 from "./components/pages/Players/7";
import Week1 from "./components/pages/Scores/Week1";
import Week2 from "./components/pages/Scores/Week2";
import Week3 from "./components/pages/Scores/Week3";
import Week4 from "./components/pages/Scores/Week4";
import Week5 from "./components/pages/Scores/Week5";
import Week6 from "./components/pages/Scores/Week6";
import Week7 from "./components/pages/Scores/Week7";
import Week8 from "./components/pages/Scores/Week8";
import April from "./components/pages/Schedule/April";
import May from "./components/pages/Schedule/May";
import June from "./components/pages/Schedule/June";
import July from "./components/pages/Schedule/July";
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
            <Route exact path="/players/1" component={Players1} />
            <Route exact path="/players/2" component={Players2} />
            <Route exact path="/players/3" component={Players3} />
            <Route exact path="/players/4" component={Players4} />
            <Route exact path="/players/5" component={Players5} />
            <Route exact path="/players/6" component={Players6} />
            <Route exact path="/players/7" component={Players7} />
            <Route exact path="/scores/week1" component={Week1} />
            <Route exact path="/scores/week2" component={Week2} />
            <Route exact path="/scores/week3" component={Week3} />
            <Route exact path="/scores/week4" component={Week4} />
            <Route exact path="/scores/week5" component={Week5} />
            <Route exact path="/scores/week6" component={Week6} />
            <Route exact path="/scores/week7" component={Week7} />
            <Route exact path="/scores/week8" component={Week8} />
            <Route exact path="/schedule/april" component={April} />
            <Route exact path="/schedule/may" component={May} />
            <Route exact path="/schedule/june" component={June} />
            <Route exact path="/schedule/july" component={July} />
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

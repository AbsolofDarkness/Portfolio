import {} from "mdbreact";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav";
import View from "./components/View";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar />
            <View />
            <Switch>
              <Route exact path="/" component={View} />
              <Route exact path="#profile" />
              <Route exact path="#experience" />
              <Route exact path="#projects" />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Main from "./Pages/Main"
import Navbar from "./Component/NavBar"
import Footer from "./Component/Footer"

class App extends Component {
  render() {
    return (

      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component = {Main} />
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

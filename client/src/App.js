import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from "./Pages/Main";
import Navbar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Meatstick from "./Pages/Meatstick";
import BBQSet from "./Pages/BBQSet";
import WifiBridge from "./Pages/WifiBridge";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component = { Main } />
            <Route exact path="/MeatStick" component = { Meatstick } />
            <Route exact path="/BBQSet" component = { BBQSet } />
            <Route exact path="/WifiBridge" component = { WifiBridge } />
            <Route exact path="/PrivacyPolicy" component = { PrivacyPolicy } />
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

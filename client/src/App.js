import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Navbar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Meatstick from "./Pages/Meatstick";
import WifiBridge from "./Pages/WifiBridge";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import BBQSet from "./Pages/BBQSet";
import Support from "./Pages/Support";
import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Cart from "./Pages/Cart";
import Blog from "./Pages/Blog";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/MeatStick" component={Meatstick} />
            <Route exact path="/BBQSet" component={BBQSet} />
            <Route exact path="/WifiBridge" component={WifiBridge} />
            <Route exact path="/Support" component={Support} />
            <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Terms" component={Terms} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Blog" component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

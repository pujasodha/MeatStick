import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/NavBar";
import Fullimage from "./Component/Fullimage";
import ProbePic from "./Images/DSC_9455.png";
import WifiBridge from "./Images/Bridgecopy.png";
import MainTitle from "./Component/MainTitle";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Fullimage>{ProbePic}</Fullimage>
      {/* <Fullimage>{WifiBridge}</Fullimage> */}
      </div>
    );
  }
}

export default App;

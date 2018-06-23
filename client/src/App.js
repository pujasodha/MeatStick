import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/NavBar";
import Fullimage from "./Component/Fullimage";
import ProbePic from "./Images/DSC_9455.png";
import WifiBridge from "./Images/Bridgecopy.png";
import MainTitle from "./Component/MainTitle";
import Fullimage2 from "./Component/Fullimage2"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Fullimage>{ProbePic}</Fullimage>
      <Fullimage2>{WifiBridge}</Fullimage2>
      </div>
    );
  }
}

export default App;

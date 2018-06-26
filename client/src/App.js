import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Navbar from "./Component/NavBar";
import Fullimage from "./Component/Fullimage";
import ProbePic from "./Images/DSC_9455.png";
import WifiBridge from "./Images/Bridgecopy.png";
import Fullimage2 from "./Component/Fullimage2";
import HalfImageRow from "./Component/HalfImageRow";
import Footer from "./Component/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Fullimage>{ProbePic}</Fullimage>
      <Fullimage2>{WifiBridge}</Fullimage2>
      <HalfImageRow></HalfImageRow>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;

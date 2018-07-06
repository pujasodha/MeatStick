import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fullimage from "../../Component/Fullimage";
import ProbePic from "../../Images/DSC_9455.png";
import WifiBridge from "../../Images/Bridgecopy.png";
import Fullimage2 from "../../Component/Fullimage2";
import HalfImageRow from "../../Component/HalfImageRow";
import Review_card from "../../Component/Review_card/Review_card";


class Main extends Component {
  render() {
    return (
      <div className="App">
     
      <Fullimage>{ProbePic}</Fullimage>
      <Fullimage2>{WifiBridge}</Fullimage2>
      <HalfImageRow></HalfImageRow>  
      
      </div>
    );
  }
}

export default Main;
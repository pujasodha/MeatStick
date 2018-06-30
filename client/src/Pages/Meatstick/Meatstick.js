import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SubNav from '../../Component/SubNav';
import ProductImage from '../../Component/ProductImage';
import ProbePic from "../../Images/DSC_9455.png";


class Meatstick extends Component {
  render() {
    return (
      <div className="App">
      <SubNav id="The MeatStick"></SubNav>
      <ProductImage id="ProbePic">{ ProbePic }</ProductImage>
      </div>
    );
  }
}

export default Meatstick;
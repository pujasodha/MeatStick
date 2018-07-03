import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SubNav from '../../Component/SubNav';
import ProductImage from '../../Component/ProductImage';
import WifiBridgePic from "../../Images/Bridgecopy.png";


class WifiBridge extends Component {
  render() {
    return (
      <div className="App">
      <SubNav title="Wifi Bridge" id="wifiBridgeNav"></SubNav>
      <ProductImage id="wifiBridgePic">{ WifiBridgePic }</ProductImage>
      </div>
    );
  }
}

export default WifiBridge;
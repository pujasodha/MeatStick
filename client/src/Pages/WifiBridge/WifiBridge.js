import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import SubNav from "../../Component/SubNav";
import ProductImage from "../../Component/ProductImage";
import WifiBridgePic from "../../Images/Bridgecopy.png";
import "./WifiBridge.css";

class WifiBridge extends Component {
  render() {
    return (
      <div>
        <SubNav title="Wifi Bridge" id="wifiBridgeNav" />
        <ProductImage id="wifiBridgePic">{WifiBridgePic}</ProductImage>
        <h1 id="wifiBridgeTitle">
          The Wifi<span id="yellow">Bridge</span>
        </h1>
      </div>
    );
  }
}

export default WifiBridge;

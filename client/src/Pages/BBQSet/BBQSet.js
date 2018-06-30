import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SubNav from '../../Component/SubNav';
import ProductImage from '../../Component/ProductImage';
import BBQPicLight from "../../Images/BBQSuper.jpg";


class BBQSet extends Component {
  render() {
    return (
      <div className="App">
      <SubNav title="BBQ Super Set" id="TheBBQSet"></SubNav>
      <ProductImage id="BbqSet">{ BBQPicLight }</ProductImage>
      </div>
    );
  }
}

export default BBQSet;
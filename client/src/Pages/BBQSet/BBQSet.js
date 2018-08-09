import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SubNav from '../../Component/SubNav';
import ProductImage from '../../Component/ProductImage';
import BBQPicLight from "../../Images/BBQSuper.jpg";
import "./BBQSet.css";


class BBQSet extends Component {
  render() {
    return (
      <div className="App">
        <SubNav title="BBQ Super Set" id="TheBBQSet"></SubNav>
        <h1 id="bbqH1">The Meat<span id="yellow">Stick</span> Ultimate BBQ Set</h1>
        <ProductImage id="BbqSet">{BBQPicLight}</ProductImage>

        <div className="BBQSetDiv">
          <h2 id="overviewTitle">Overview</h2>
          <p id="SKU">SKU: 860400000716</p>
          <p id="firstlinebbq" className="meatstickP">The MeatStick Ultimate BBQ set is the first and only TRUE Wireless Smart Meat Thermometer with a companion WiFi Bridge.</p>
          <p className="meatstickP">The MeatStick Ultimate BBQ set includes 2 MeatStick TRUE wireless probes, 1 MeatStick charger, and 1 MeatStick WiFi Bridge. </p>

          <h3 className="meatstickH3">TRUE WIRELESS</h3>
          <p className="meatstickP">The MeatStick is able to be inserted and left in the meat for the entire cooking process. Don't mess with tangled wires, or the need to constantly open the oven just to check your temperatures. </p>

          <h3 className="meatstickH3">HIGH TEMPERATURE RESISTANT DUAL SENSORS </h3>
          <p className="meatstickP">The internal sensor can withstand up to 212ºF (100ºC), while the handle sensor can withstand up to 572ºF (300ºC). As the internal shaft is inserted into the meat, it will never exceed 212ºF. Unless of course you’re cooking charcoal! </p>

          <h3 className="meatstickH3">CUSTOM ALERTS </h3>
          <p className="meatstickP">Set custom alerts to notify you when your meat has reached certain temperatures. Even set alerts for ambient temperature ranges to remind you if your fire burns out or there’s a grease flare up! </p>

          <h3 className="meatstickH3">RECHARGEABLE BATTERY – LASTS OVER 36 HOURS </h3>
          <p className="meatstickP">The MeatStick uses a rechargeable battery that charges through the included charger with a microUSB input. The WiFi Bridge has a microUSB input for power. (Cable included) A USB battery pack is recommended (sold separately) </p>

          <h3 className="meatstickH3">WI-FI LINK - EXTEND YOUR RANGE </h3>
          <p className="meatstickP">The MeatStick uses Bluetooth to communicate with your phone with a range of up to 30 feet. However, when The MeatStick is enclosed in an oven, grill, smoker, or water (sous vide), the range can be greatly limited depending on the enclosure. Wi-Fi Link allows you to use your extra phone/tablet or WiFi Bridge in range of The MeatStick to transmit the temperature data through your local Wi-Fi or the cloud to your phone. You can then check your temperatures from anywhere!</p>
        </div>
      </div>
    );
  }
}

export default BBQSet;
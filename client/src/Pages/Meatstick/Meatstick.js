import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SubNav from '../../Component/SubNav';
import ProductImage from '../../Component/ProductImage';
import ProbePic from "../../Images/DSC_9455.png";
import Review_cards from "../../Component/Review_card"
import "./Meatstick.css";


class Meatstick extends Component {
  render() {
    return (
      <div className="App">
        <SubNav title="The MeatStick" id="meatStickNav"></SubNav>
        <h1 id="meatstickH1">The Meat<span id="yellow">Stick</span></h1>
        <ProductImage id="ProbePic">{ProbePic}</ProductImage>

        <div className ="row" id="meatStickInfoRow">
        <div className="col s3"></div>
        <div className="col s6">
          <h2 id="overviewTitle">Overview</h2>
          <p id="SKU">SKU: 860400000709</p>
          <h3  className="meatstickH3">TRUE WIRELESS</h3>
          <p>The MeatStick is able to be inserted and left in the meat for the entire cooking process. Don't mess with tangled wires, or the need to constantly open the oven just to check your temperatures. </p>

          <h3  className="meatstickH3">HIGH TEMPERATURE RESISTANT DUAL SENSORS</h3>
          <p>The internal sensor can withstand up to 212ºF (100ºC), while the handle sensor can withstand up to 572ºF (300ºC). As the internal shaft is inserted into the meat, it will never exceed 212ºF. Unless of course you’re cooking charcoal!</p>

          <h3  className="meatstickH3">CUSTOM ALERTS</h3>
          <p>Set custom alerts to notify you when your meat has reached certain temperatures. Even set alerts for ambient temperature ranges to remind you if your fire burns out or there’s a grease flare up!</p>

          <h3  className="meatstickH3">APP CONTROLLED</h3>
          <p>Use The MeatStick app to cook all types of meat perfectly and consistently. The app is available on both Android and iOS. As the cook progresses, the app will update the estimated cook time so you know when your meat will be done.</p>


          <h3  className="meatstickH3">RECHARGEABLE BATTERY – LASTS OVER 36 HOURS</h3>
          The MeatStick uses a rechargeable battery that charges through the included charger with a microUSB input. (Cable included)
          
<h3  className="meatstickH3">WI-FI LINK - EXTEND YOUR RANGE</h3>

          <p>The MeatStick uses Bluetooth to communicate with your phone with a range of up to 30 feet. However, when The MeatStick is enclosed in an oven, grill, smoker, or water (sous vide), the range can be greatly limited depending on the enclosure. Wi-Fi Link allows you to use your extra phone/tablet in range of The MeatStick to transmit the temperature data through your local Wi-Fi or through the cloud to your phone. You can then check your temperatures from anywhere!</p>

          <p>You may also consider The MeatStick WiFi Bridge to extend your range if you do not have an extra phone.</p>

          <h2 id="specsTitle">Specs</h2>

          <ul id="specsUl" className="meatStickUl">
            <li className="meatstickLi">• A TRUE wireless smart meat thermometer that helps you cook the perfect steak </li>
            <li className="meatstickLi">• Broadcast its temperature and status continuously via Bluetooth signal to mobile devices</li>
            <li className="meatstickLi">• Powered by a high-temperature resistant rechargeable battery</li>
            <li className="meatstickLi">• No wiring required, no installation required</li>
            <li className="meatstickLi">• Dual Temperature sensors to monitor the meat’s internal and ambient temperature</li>
            <li className="meatstickLi">• All features controlled from the free companion App on Android and iOS devices</li>
            <li className="meatstickLi">• Charge the Meat Thermometer battery using the included charger</li>
            <li className="meatstickLi">• The app can monitor up to 16 MeatSticks simultaneously</li>
            <li className="meatstickLi">• Select a preferable final meat temperature from the recipes built into the MeatStick App</li>
            <li className="meatstickLi">• Check remaining battery percentage via app</li>
            <li className="meatstickLi">• Receive audible, tactile, and/or visual notifications from your smartphone when your meat is ready/almost ready, when abnormal ambient temperatures are detected, and when battery is low </li>
          </ul>
        </div>
        <div className="col s3"></div>
      </div>
      </div>
    );
  }
}

export default Meatstick;
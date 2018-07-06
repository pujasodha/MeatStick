import React, { Component } from "react";
import Contact from "../../Component/Contact";
import "./Support.css";
import Review from "../../Component/Review";

class Support extends Component {
  render() {
    return (
      <div className="Support">
        <h1 id="contactH1">Contact Us</h1>
        <p id="contactP">Please reach out if you have any questions about our products.</p>
        <Contact />
        <Review/>
           
      </div>
    );
  }
}

export default Support;
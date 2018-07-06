import React, { Component } from "react";
import Contact from "../../Component/Contact";
import Review from "../../Component/Review"

class Support extends Component {
  render() {
    return (
      <div className="Support App">
       <div>
        <h1>CONTACT US</h1>
        <p>PLEASE REACH OUT IF YOU HAVE ANY QUESTIONS ABOUT OUR PRODUCT. </p> <br/>
        <p>For APP support, please e-mail us through the support section in the app.</p>
        </div>
        <Contact />
        <Review/>
           
      </div>
    );
  }
}

export default Support;
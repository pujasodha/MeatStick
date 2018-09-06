import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/mail", {
        name: this.state.name,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        message: this.state.message
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(e) {
        console.log(e);
      });

    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change.
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div className="row">
            <form id="reg-form">
              <div className="row">
                <div className="col s3" id="marginLeft0" />
                <div className="input-field col s6" id="marginLeft0">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="validate"
                    placeholder="Name"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col s3" />
              </div>
              <div className="row">
                <div className="col s3" />
                <div className="input-field col s6" id="marginLeft0">
                  <input
                    name="email"
                    id="email"
                    type="text"
                    className="validate"
                    required
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col s3" />
              </div>
              <div className="row">
                <div className="col s3" />
                <div className="input-field col s6">
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="Text"
                    className="validate"
                    minlength="8"
                    maxlength="13"
                    required
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col s3" />
              </div>
              <div className="row">
                <div className="col s3" />
                <div className="input-field col s6">
                  <textarea
                    name="message"
                    id="message"
                    type="Text"
                    className="validate"
                    minlength="3"
                    required
                    placeholder=" Message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    rows="10"
                    cols="30"
                  />
                </div>
                <div className="col s3" />
              </div>
              <div className="row">
                <div className="col s3" id="marginLeft0" />
                <div className="input-field col s6" id="marginLeft0">
                  <button
                    id="contactSubmit"
                    className="btn btn-large btn-register waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.handleSubmit}
                  >
                    Send
                  </button>
                  <div className="col s3" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

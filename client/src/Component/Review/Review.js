import React, { Component } from 'react';
import './Review.css';
import axios from 'axios';



class Review extends Component {
    state = {
        name: "",
        review: ""
    }

    handleSubmit = event => {

        event.preventDefault()

        axios.post("/review",{
            name:this.state.name,
            review:this.state.review
            
        }).then(function(res){

            console.log(res)
        }).catch(function (e) {
            console.log(e)
        })


        this.setState({
            name: "",
            review: ""
        })


    }

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
            <div className="Review">
                <div className="container">
                    <div className="row">
                        <div className="col s3"></div>
                        <div className="input-field  col s6">
                            <input id="name" name="name" type="text" className="validate" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="col s3"></div>
                    </div>
                    <div className="row">
                        <div className="col s3" id="divThing"></div>
                        <div className="input-field  col s6" id="divThing2">
                            <textarea
                                id="review"
                                name="review"
                                type="Text"
                                className="validate"
                                minlength="3"
                                required
                                placeholder=" Message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                rows="10" cols="30" />
                            <div className="col s3"></div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s3" id="divThing3"></div>
                            <div className="col s6" id="divThing3">
                                <button
                                    id="reviewBTN"
                                    className="btn btn-large btn-register waves-effect waves-light col s2"
                                    type="submit"
                                    name="action"
                                    onClick={this.handleSubmit}
                                >Send
                            </button>
                            <div className="col s3"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default Review
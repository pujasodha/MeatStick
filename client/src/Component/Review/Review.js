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
            review:this.state.review,
            
        }).then(function(res){
            console.log(res)
        }).catch(function(e){
            console.log(e)
        })
        

        this.setState({
        name:"",
        review:""
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
                        <div className="input-field  col s4">
                            <input id="name" name="name" type="text" className="validate" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="input-field  col s4">
                            <textarea
                                name="message"
                                id="message"
                                type="Text"
                                className="validate"
                                minlength="3"
                                required
                                placeholder="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                rows="10" cols="30" />
                            <button
                                id="reviewBTN"
                                className="btn btn-large btn-register waves-effect waves-light col s2"
                                type="submit"
                                name="action"
                                onClick={this.handleSubmit}
                            >Send
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Review
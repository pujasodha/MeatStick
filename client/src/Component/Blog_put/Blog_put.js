import React, { Component } from 'react';
import './Blog_put.css';
import axios from 'axios';



class Blog_put extends Component {
    state = {
        subject: "",
        blog: ""
    }

    handleSubmit = event => {

        event.preventDefault()

        axios.post("/blog_put",{
            subject:this.state.subject,
            blog:this.state.blog
            
        }).then(function(res){

            console.log(res)
        }).catch(function (e) {
            console.log(e)
        })


        this.setState({
            subject: "",
            blog: ""
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
            <div className="Blog">
                <div className="container">
                    <div className="row">
                        <div className="col s3"></div>
                        <div className="input-field  col s6">
                            <input id="subject" name="subject" type="text" className="validate" placeholder="Subject" required value={this.state.subject} onChange={this.handleInputChange} />
                        </div>
                        <div className="col s3"></div>
                    </div>
                    <div className="row">
                        <div className="col s3" id="divThing"></div>
                        <div className="input-field  col s6" id="divThing2">
                            <textarea
                                id="blog"
                                name="blog"
                                type="Text"
                                className="validate"
                                minlength="3"
                                required
                                placeholder="Blog"
                                value={this.state.blog}
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

export default Blog_put
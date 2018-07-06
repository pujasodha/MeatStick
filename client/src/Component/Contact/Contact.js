import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
    state = {
        name : "",
        email : "",
        phoneNumber : "",
        message: ""    
    }
   

    handleSubmit = event => {

        event.preventDefault()



        axios.post("/mail",{
            name:this.state.name,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber,
            message:this.state.message
        }).then(function(res){
            console.log(res)
        }).catch(function(e){
            console.log(e)
        })
        

        this.setState({
        name:"",
        email:"",
        phoneNumber:"",
        message:""
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
            <div className='Contact'>
                <div className="container">
                    <div className="row">
                        <form className="col s12" id="reg-form">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input  id="name" name = "name" type="text" className="validate" placeholder="Name" required value={this.state.name}   onChange = {this.handleInputChange}/>
                                        
                                
                                </div>
                                <div className="input-field col s6">
                                    <input name="email"id="email" type="text" className="validate" required  placeholder="E-mail" value = {this.state.email} onChange = {this.handleInputChange}/>
                                       
                                   
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="phoneNumber" id="phoneNumber" type="Text" className="validate" minlength="8" maxlength ="13"required placeholder="Phone Number" value = {this.state.phoneNumber} onChange = {this.handleInputChange}/>
                                            
                                      
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea 
                                            name="message" 
                                            id="message" 
                                            type="Text" 
                                            className="validate" 
                                            minlength="3" 
                                            required  
                                            placeholder="message" 
                                            value = {this.state.message} 
                                            onChange = {this.handleInputChange}
                                            rows="10" cols="30" />
                                             
                                            
                                        </div>
                                    </div>

                                    <div className="input-field col s6">
                                        <button 
                                            id="contactSubmit"
                                            className="btn btn-large btn-register waves-effect waves-light" 
                                            type="submit" 
                                            name="action"
                                            onClick= {this.handleSubmit}
                                            >Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}

export default Contact
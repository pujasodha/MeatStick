import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <div className="container">
                    <div className="row">
                        <form className="col s12" id="reg-form">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="name" type="text" className="validate" required/>
                                        <label for="name">Name</label>
                                
                                </div>
                                <div className="input-field col s6">
                                    <input id="email" type="text" className="validate" required/>
                                        <label for="email">E-mail</label>
                                   
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="phoneNumber" type="Text" className="validate" minlength="8" maxlength ="13"required/>
                                            <label for="phoneNumber">Phone Number</label>
                                      
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="address" type="Text" className="validate" minlength="3" required/>
                                                <label for="address">Password</label>
                                            
                                        </div>
                                    </div>

                                    <div className="input-field col s6">
                                        <button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
                                        
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

export default Login
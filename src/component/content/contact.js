import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            accountType: "BU"
        }
    }
    
    submitRegisterForm = (event) => {
        event.preventDefault();
        this.setState({isRedirect: true});
    }
    onChangeValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    onUploadImg = (event) => {
        this.setState({inputImage: event.target.files[0].name});
    }
    render() {
        if(this.state.isRedirect === true){
            console.log(this.state.firstName + "/" + this.state.lastName);
            return <Redirect to="/"></Redirect>
        }
        return (
            <div className="bg-gradient-primary">
                <div className="container">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                    <div className="col-lg-7">
                        <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user">
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" onChange={(event) => this.onChangeValue(event)} name="firstName" placeholder="First Name" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" onChange={(event) => this.onChangeValue(event)} name="lastName" placeholder="Last Name" />
                            </div>
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control form-control-user" onChange={(event) => this.onChangeValue(event)} name="inputEmail" placeholder="Email Address" />
                            </div>
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user" onChange={(event) => this.onChangeValue(event)} name="inputPassword" placeholder="Password" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user" onChange={(event) => this.onChangeValue(event)} name="repeatPassword" placeholder="Repeat Password" />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <select onChange={(event) => this.onChangeValue(event)} defaultValue={this.state.accountType} className="form-control" name="accountType">
                                        <option value="AD">Admin</option>
                                        <option value="EM">Emplyee</option>
                                        <option value="BU">Business</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    
                                </div>
                               
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                      <input type="file" class="form-control-file" name="inputImage" onChange={(event) => this.onUploadImg(event)}/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(event) => this.submitRegisterForm(event)}>Register Account</button>
                           
                            <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw" /> Register with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                            </a>
                        </form>
                        <hr />
                        <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <a className="small" href="login.html">Already have an account? Login!</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Contact;
import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className="container login-center">
        <div className="col-10 col-md-4 col-lg-3">
            <h1 className="loginCenter">Register</h1>
            <div className="form-group">
                <label for="username" className="form-head">Username</label>
                <input type="username" className="form-control" id="username" />
                <label for="email" className="form-head">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <div className="password-container">
                    <label for="password" className="form-head">Password</label>
                    <input type="password" className="form-control" id="password" />
                    <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                    <label for="password" className="form-head">Confirm Password</label>
                    <input type="password" className="form-control" id="confirm-password" />
                    <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                </div>
            </div>

            <div className="d-grid gap-2 col-12 mx-auto m-4">
                <Link to="/User/All-Schedule" className="btn btn-primary-color mb-2" type="button">Register</Link>
                <Link to="/Fasilitator/All-Schedule" className="btn btn-google" type="button">
                    <img src="images/icons/google-icon.svg" alt="google" className="google-icon mx-1" />Register with google
                </Link>
            <div className="new-regist">
                <span className="new-regist-text">Already Have Account? </span> <Link to="/">Login</Link>
            </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Register

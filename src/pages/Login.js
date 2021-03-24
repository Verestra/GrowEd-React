import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div className="container login-center">
        <div className="col-10 col-md-4 col-lg-3">
            <h1 className="loginCenter">Login</h1>
            <div className="form-group">
                <label for="username" className="form-head">Username or Email</label>
                <input type="email" className="form-control" id="username" placeholder="" />
            </div>
            <div className="form-group">
                <div className="password-container">
                    <label for="password" className="form-head">Password</label>
                    <input type="password" className="form-control" id="password" />
                    <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                </div>
            </div>
            <Link to="/Reset-Password" className="forgot-pass float-end mt-3 mb-3">Forgot
                password?</Link>

            <div className="d-grid gap-2 col-12 mx-auto">
                <Link to="/User/Dashboard" className="btn btn-primary-color mb-2" type="button">Login</Link>
                <Link to="/Fasilitator/Dashboard" className="btn btn-google" type="button">
                    <img src="images/icons/google-icon.svg" alt="google" className="google-icon mx-1" />Login with google
                </Link>
            <div className="new-regist">
                <span className="new-regist-text">New user? </span> <Link to="./Register">Register</Link>
            </div>
            </div>
        </div>
    </div>
      </>
    )
  }
}

export default App

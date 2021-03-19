import React, { Component } from 'react';
import './assets/css/style.css';
// import ReactDOM from 'react-dom';


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
            <a className="forgot-pass float-end mt-3 mb-3" href="reset-password.html">Forgot
                password?</a>

            <div className="d-grid gap-2 col-12 mx-auto">
                <a href="all-schedule.html" className="btn btn-primary-color mb-2" type="button">Login</a>
                <a href="all-schedule.html" className="btn btn-google" type="button">
                    <img src="images/icons/google-icon.svg" alt="google" className="google-icon mx-1" />Login with google
                </a>
            <div className="new-regist">
                <span className="new-regist-text">New user? </span> <a href="register.html">Register</a>
            </div>
            </div>
        </div>
    </div>
      </>
    )
  }
}

export default App

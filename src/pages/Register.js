import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Axios from 'axios'

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordMatch: ""
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, passwordMatch } = this.state;
        const body = {
            username: username,
            email: email,
            password: password,
            passwordMatch: passwordMatch
        };

        Axios
            .post("http://localhost:8000/users/api/auth/register", body)
            .then((result) => {
                alert("Register Complete");
                if (result.data.success) {
                    this.props.history.push('/')
                }
                console.log(result);
                this.setState({
                    username: "",
                    email: "",
                    password: "",
                    passwordMatch: ""
                });
            })
            .catch((err) => {
                alert("Register Failed");
                console.error(err)
            });
    };



    render() {
        return (
            <div className="container login-center">
                <div className="col-10 col-md-4 col-lg-3">
                    <h1 className="loginCenter">Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="username" className="form-head">Username</label>
                            <input type="username" className="form-control" name="username" onChange={this.handleChange} />
                            <label for="email" className="form-head">Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="password-container">
                                <label for="password" className="form-head">Password</label>
                                <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                                <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                                <label for="password" className="form-head">Confirm Password</label>
                                <input type="password" className="form-control" name="passwordMatch" onChange={this.handleChange} />
                                <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                            </div>
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto m-4">
                            <button className="btn btn-primary-color mb-2" type="submit">Register</button>
                            <Link to="/Fasilitator/All-Schedule" className="btn btn-google" type="button">
                                <img src="images/icons/google-icon.svg" alt="google" className="google-icon mx-1" />Register with google</Link>
                            <div className="new-regist">
                                <span className="new-regist-text">Already Have Account? </span> <Link to="/">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";

class App extends Component {
    state = {
        userNameOrEmail: "",
        password: ""
    }

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { userNameOrEmail, password } = this.state;
        const body = {
            userNameOrEmail: userNameOrEmail,
            password: password,
        };

        Axios
            .post("http://localhost:8000/users/api/auth/login", body)
            .then((result) => {
                console.log(result.data.data.token)
                localStorage.setItem("token", "Bearer " + result.data.data.token)
                
                this.setState({
                    userNameOrEmail: "",
                    password: ""
                });
            })
            .catch((err) => {
                alert("Login Failed");
                console.error(err)
            });
    };

componentDidMount() {
    console.log(localStorage.getItem("token"))
}
    render() {
        return (
            <>
                <div className="container login-center">
                    <div className="col-10 col-md-4 col-lg-3">
                        <h1 className="loginCenter">Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="userName" className="form-head">userName or Email</label>
                                <input type="text" className="form-control" name="userNameOrEmail" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <div className="password-container">
                                    <label for="password" className="form-head">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                                    <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                                </div>
                            </div>

                            <Link to="/Reset-Password" className="forgot-pass float-end mt-3 mb-3">Forgot password?</Link>

                            <div className="d-grid gap-2 col-12 mx-auto">
                                <button className="btn btn-primary-color mb-2" type="submit">Login</button>
                                <Link to="/Fasilitator/Dashboard" className="btn btn-google" type="button">
                                    <img src="images/icons/google-icon.svg" alt="google" className="google-icon mx-1" />Login with google </Link>
                                <div className="new-regist">
                                    <span className="new-regist-text">New user? </span> <Link to="./Register">Register</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default App

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Reset_Password extends Component {
    render() {
        return (
            <>
                <div class="forgot-pass-content">
                    <Link to="/"><img src="images/icons/back-arrow-icon.svg" class="back-arrow-icon" alt="Back" /></Link>
                    <div class="row col-10 col-md-12 col-lg-12">
                        <div class="col-12 col-md-6 person-container">
                            <img src="images/icons/person.svg" class="person" alt="person" />
                        </div>

                        <div class="col-12 col-md-6 reset-form-container">
                            <div class="d-flex align-items-center justify-content-center flex-column text-center">
                                <h1>Reset Password</h1>
                                <p class="enter-email-instruction">Enter your email address linked to this account.</p>
                                <p class="reset-description-text">We will send you the verification code to reset your password</p>
                            </div>
                            <div class="form-group">
                                <label for="email" class="form-head bg-white">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="" />
                            </div>
                            <button class="btn btn-primary-color r-5px my-3">Send</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Reset_Password

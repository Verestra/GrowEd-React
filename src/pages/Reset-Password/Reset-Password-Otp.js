import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

import Reset_Password_New from "./Reset-Password-New";

class Reset_Password_Otp extends Component {
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
                                <p class="enter-email-instruction">Enter verification code we just sent to your email address.</p>
                            </div>
                            <div class="mb-6 text-center">
                                <div id="otp" class="flex justify-center">
                                    <input class="m-2 text-center otp" type="text" id="first" maxlength="1" />
                                    <input class="m-2 text-center otp" type="text" id="second" maxlength="1" />
                                    <input class="m-2 text-center otp" type="text" id="third" maxlength="1" />
                                    <input class="m-2 text-center otp" type="text" id="fourth" maxlength="1" />  
                                    <p class="reset-description-text">Didn't receive code? <Link to="./Resend">Resend</Link> </p> 
                                    <Link to="./Reset-Password-New" class="btn btn-primary-color r-5px my-3 w-100">Verify</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Reset_Password_Otp

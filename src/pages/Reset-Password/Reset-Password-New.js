import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";


const customStyles = {
    content: {
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '50%',
        backgroundColor: 'rgba(0,0,0,0.75)'
    },
    overlay: {
        backgroundColor: 'transparent'
    }
};


function ResetPasswordNew() {
        const [modalIsOpen, setModalIsOpen] = useState(false)
        return (
            <div class="forgot-pass-content">
                <Link to="/"><img src="images/icons/back-arrow-icon.svg" class="back-arrow-icon" alt="Back" /></Link>
                <div class="row col-10 col-md-12 col-lg-12">
                    <div class="col-12 col-md-6 person-container">
                        <img src="images/icons/person.svg" class="person" alt="person" />
                    </div>

                    <div class="col-12 col-md-6 reset-form-container">
                        <Modal isOpen={modalIsOpen}
                         shouldCloseOnOverlayClick={false}
                          onRequestClose={() => setModalIsOpen(false)}
                           style={customStyles}>
                            <div className="d-flex align-items-center justify-content-center flex-column text-center">
                                <h1 className="white-text">Password changed!</h1>
                                <img
                                    src="images/icons/password-checklist.png"
                                    alt="Success"
                                />
                                <Link to={"/"}>
                                    <h2 className="white-text text-link">Login to your account</h2>
                                </Link>
                            </div>
                        </Modal>
                        <div class="d-flex align-items-center justify-content-center flex-column text-center">
                            <h1>Create New Password</h1>
                            <p class="enter-email-instruction mx-2">Your new password must be different <br /> from previous used password</p>
                        </div>
                        <div class="form-group">
                            <div className="password-container ">
                                <label for="password" className="form-head">Password</label>
                                <input type="password" className="form-control" id="password" />
                                <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                                <label for="new-password" className="form-head">New Password</label>
                                <input type="new-password" className="form-control" id="new-password" />
                                <img src="images/icons/reveal-icon.svg" className="reveal-icon" alt="reveal" />
                            </div>
                            <button onClick={() => setModalIsOpen(true)} className="btn btn-primary-color my-3 w-100" > Create </button>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default ResetPasswordNew

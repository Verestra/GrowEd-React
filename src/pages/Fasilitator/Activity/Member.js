import React, { useState } from 'react';
import Modal from 'react-modal';
import Mobile_Nav from '../../../components/Mobile-Nav';
import Side_Menu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        top: '15%',
        right: '25%',
        bottom: '15%',
        left: '40%',
        backgroundColor: 'rgb(255,255,255,1)'
    },
    overlay: {
        backgroundColor: 'rgb(230,237,246,0.75)'
    }
};


function Member () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
        return (
            <>
                <Mobile_Nav />
                <div class="dashboard-container">
                    <Side_Menu />
                    <div id="main-content" class="bg-transparent p-3 d-flex flex-column justify-content-start">
                        <h1 class="d-flex align-items-center">
                            <Link to="./Activity">
                                <img class="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                            </Link>
                         Know more javascript
                        </h1>
                        <div class="card bg-white border-0 p-0 r-10px">
                            <div class="class-detail-cover-container">
                                <img src="../images/img/class-detail-cover.png" class="class-cover-image r-top-10px"
                                    alt="Cover image" />

                                <div class="cover-description">
                                    <div class="category-icon-container r-10px">
                                        <img src="../images/icons/software-category-icon.svg" alt="software category" />
                                    </div>
                                    <div class="cover-description-content">
                                        <div>
                                            <h2 class="cover-title">Know more Javascript</h2>
                                            <div class="cover-description-level">
                                                <span>Level : Beginner</span>
                                                <span>Category : Software</span>
                                                <span>Price : Free</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                class="btn btn-success r-15px px-3 py-2 text-white mt-2 m-md-0 m-lg-0">Register</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="card-header border-0 col-12 col-md-12 col-lg-12 p-0 mt-5 ">
                            </div>
                            <div class="card-body">
                                <div class="class-description-container">
                                    <div class="tab-menu-container">
                                        <Link to="./Class-Details" class="tab-menu cursor-pointer text-link">
                                            Information</Link>
                                        <Link to="./Class-Progress" class="tab-menu cursor-pointer text-link">Class
                                         Progress</Link>
                                        <div class="tab-menu">Class Discussion</div>
                                        <Link to="./Member" class="tab-menu active cursor-pointer text-link">Member </Link>
                                    </div>


                                    <div class="description">
                                    <Modal isOpen={modalIsOpen}
                                        shouldCloseOnOverlayClick={false}
                                        onRequestClose={() => setModalIsOpen(false)}
                                        style={customStyles}>
                                            <div className="d-flex flex-row align-items-center justify-content-between flex-grow-1">
                                            <img src="../images/photo-profile/profile-deddy.png" alt="Deddy Corbuzier" />
                                                <div>
                                                    <div><span className="member-name">Deddy Corbuzier</span></div>
                                                </div>
                                                <div onClick={() => setModalIsOpen(false)} className="cursor-pointer"><img className="black" src="../images/icons/modal-close.png"/></div>
                                            </div>
                                            <div class="modal-content d-flex flex-row mt-4 align-items-center justify-content-between" >
                                                <span className="text-content mx-4">HTML Essential Training</span>
                                                <span className="complete-score mx-4">32 </span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">CSS Essential Training</span>
                                                <span className="low-score mx-4">42</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Javascript Essential Training</span>
                                                <span className="veryLow-score mx-4">21</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Responsive Layout</span>
                                                <span className="complete-score mx-4">98</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Mid-Term-Exam</span>
                                                <span className="veryGood-score mx-4">86</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Bootstrap4 Essential Training</span>
                                                <span class="badge badge-ongoing mx-2 my-2 r-15px">Unfinished</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Sass Essential Training</span>
                                                <span class="badge badge-ongoing mx-2 my-2 r-15px">Unfinished</span>
                                            </div>
                                            <div class="modal-content d-flex flex-row align-items-center justify-content-between">
                                                <span className="text-content mx-4">Learning React.Js</span>
                                                <span class="badge badge-ongoing mx-2 my-2 r-15px">Unfinished</span>
                                            </div>
                                            
                                        </Modal>
                                        <div onClick={() => setModalIsOpen(true)} className="cursor-pointer member">
                                            <div className="d-flex flex-row align-items-center justify-content-between flex-grow-1">
                                            <img src="../images/photo-profile/profile-deddy.png" alt="Deddy Corbuzier" />
                                                <div>
                                                    <div><span className="member-name">Deddy Corbuzier</span></div>
                                                </div>
                                                <div><img className="black" src="../images/icons/List.png"/></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Member

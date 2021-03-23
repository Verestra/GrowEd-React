import React, { Component } from 'react';

import Mobile_Nav from '../../../components/Mobile-Nav';
import Side_Menu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";

 class Class_Details extends Component {
    render() {
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
                             Front-end fundamentals
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
                                            <h2 class="cover-title">Front-end fundamentals</h2>
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
                                        <Link to="./Class-Detail" class="tab-menu active cursor-pointer text-link">
                                            Information</Link>
                                        <Link to="./Class-Progress" class="tab-menu cursor-pointer text-link">Class
                                             Progress</Link>
                                        <div class="tab-menu">Class Discussion</div>
                                        <Link to="./Member" class="tab-menu cursor-pointer text-link">Member </Link>
                                    </div>
                                    <div class="description">
                                        <h3>Description</h3>
                                        <p>Javascript from the basic for beginner. JavaScript is a programming language that adds
                                        interactivity to your website. This happens in games, in the behavior of responses when
                                        buttons are pressed or with data entry on forms; with dynamic styling; with animation,
                                        etc. This class helps you get started with JavaScript and furthers your understanding of
                                what is possible.</p>
                                        <h3>What will I learn?</h3>
                                        <p>
                                            <ul>
                                                <li>JavaScript from scratch - beginner to advanced</li>
                                                <li>Everything you need to become a JavaScript expert and apply for JavaScript jobs</li>
                                                <li>All about variables, functions, objects and arrays</li>
                                                <li>Deep dives into prototypes, JavaScript engines & how it works behind the scenes</li>
                                                <li>Event handling, asynchronous coding and Http requests</li>
                                                <li>All core features and concepts you need to know in modern JavaScript development
                                </li>
                                                <li>And so much more!</li>
                                            </ul>
                                        </p>
                                        <h3>Requirements</h3>
                                        <p>
                                            <ul>
                                                <li>NO prior JavaScript knowledge is required</li>
                                                <li>Basic web development knowledge is recommended</li>
                                                <li>Basic understanding of HTML and CSS helps but is NOT required</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Class_Details

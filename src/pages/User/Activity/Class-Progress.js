import React, { Component } from 'react';
import Mobile_Nav from '../../../components/Mobile-Nav';
import Side_Menu from '../../../components/Side-Menu';


class Class_Progress extends Component {
    render() {
        return (
            <>
                <Mobile_Nav />
                <div class="dashboard-container">
                    <Side_Menu />
                    <div id="main-content" class="bg-transparent p-3 d-flex flex-column justify-content-start">
                        <h1 class="d-flex align-items-center">
                            <a href="activity.html">
                                <img class="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                            </a>
                Front-end Fundamentals
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
                                        <div class="flex-grow-1">
                                            <h2 class="cover-title">Front-end Fundamentals</h2>
                                            <div class="cover-description-level">
                                                <span>Level : Beginner</span>
                                                <span>Category : Software</span>
                                                <span>Price : Free</span>
                                            </div>
                                            <div class="horizontal-progress-container flex-grow-1">
                                                <span>80% to complete</span>
                                                <div class="horizontal-background w-100">
                                                    <span class="horizontal-progress w-80"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-center d-none d-md-flex">
                                            <span>Your Score</span>
                                            <span class="score">86</span>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column align-items-center d-flex d-md-none">
                                        <span>Your Score</span>
                                        <span class="score">86</span>
                                    </div>
                                </div>
                            </div>


                            <div class="card-header border-0 col-12 col-md-12 col-lg-12 p-0 mt-5 ">

                            </div>
                            <div class="card-body ">
                                <div class="class-description-container class-progress-container">
                                    <div class="tab-menu-container">
                                        <div class="tab-menu cursor-pointer" onclick="window.location='class-detail.html';">
                                            Information</div>
                                        <div class="tab-menu active cursor-pointer" onclick="window.location='class-progress.html';">
                                            Class Progress</div>
                                        <div class="tab-menu">Class Discussion</div>
                                    </div>
                                    <div class="description">
                                        <div class="table-responsive mt-0">
                                            <table class="table table-borderless new-class-table progress-class-table p-1 table-style">
                                                <tbody>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600"> HTML Essential Training </span></td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="complete-score">100</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600">CSS Essential Training</span></td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="veryLow-score">42</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600">Javascript Essential Training</span>
                                                        </td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="veryLow-score">21</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600">Responsive Layout</span></td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="complete-score">98</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600">Mid-term Exam </span></td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="veryGood-score">86</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" checked="True" disabled="disabled" />
                                                        </th>
                                                        <td><span class="fw-600">Bootstrap4 Essential Training </span>
                                                        </td>
                                                        <td><span class="complete-course"> You have completed this topic
                                                </span></td>
                                                        <td><span class="medium-score">72</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" /></th>
                                                        <td><span class="fw-600">Sass Essential Training</span></td>
                                                        <td><span class="fw-600">Friday, 6 November 2020 <br />
                                                    08.00 - 09.40</span></td>
                                                        <td><span class="score"></span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" /></th>
                                                        <td><span class="fw-600">Learning React.js</span></td>
                                                        <td><span class="fw-600">Friday, 13 November 2020 <br />
                                                    08.00 - 09.40</span></td>
                                                        <td><span class="score"></span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" /></th>
                                                        <td><span class="fw-600">UX for Web Design</span></td>
                                                        <td><span class="fw-600">Friday, 20 November 2020 <br />
                                                    08.00 - 09.40</span></td>
                                                        <td><span class="score"></span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope=" row"><input type="checkbox" /></th>
                                                        <td><span class="fw-600">Final-termExam</span></td>
                                                        <td><span class="fw-600">Friday, 27 November 2020 <br />
                                                    08.00 - 09.40</span></td>
                                                        <td><span class="score"></span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
}

export default Class_Progress
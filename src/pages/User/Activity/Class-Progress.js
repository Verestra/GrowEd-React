import React, { useEffect, useRef } from 'react';
import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getStudentProgress } from '../../../Redux/ActionCreators/GetStudentProgress'
function ClassProgress(props) {
    const { getStudentProgressReducer, getProgress } = props
    const getRef = useRef();
    useEffect(() => {
        if (!getRef.current) {
            getProgress();
            getRef.current = true;
        }
    })
    return (
        <>
            <MobileNav />
            <div class="dashboard-container">
                <SideMenu />
                <div id="main-content" class="bg-transparent p-3 d-flex flex-column justify-content-start">
                    <h1 class="d-flex align-items-center">
                        <Link to="./Activity">
                            <img class="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                        </Link>
                                Front-end Fundamentals
                            </h1>
                    <div class="card bg-white border-0 p-0 r-10px">
                        <div class="class-detail-cover-container">
                            <img src="../images/img/class-detail-cover.png" class="class-cover-image r-top-10px"
                                alt="Cover" />

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
                                    <Link to="./Class-Detail" class="tab-menu cursor-pointer text-link">
                                        Information</Link>
                                    <Link to="./Class-Progress" class="tab-menu active cursor-pointer text-link">
                                        Class Progress</Link>
                                    <div class="tab-menu">Class Discussion</div>
                                </div>
                                <div class="description">
                                    <div class="table-responsive mt-0">
                                        <table class="table table-borderless new-class-table progress-class-table p-1 table-style">
                                            <tbody>
                                                {getStudentProgressReducer.isPending ? (
                                                    <div> Loading... </div>
                                                ) : (
                                                    <>
                                                        {getStudentProgressReducer.isFulfilled
                                                            ? getStudentProgressReducer.results.map((my) => (
                                                                <tr>
                                                                    <th scope=" row"><input type="checkbox" /></th>
                                                                    <td><span class="fw-600" key={my.name}>{my.name}</span></td>
                                                                    <td><span class="fw-600">Friday, 27 November 2020 <br /> 08.00 - 09.40</span></td>
                                                                    <td><span class="score" key={my.name}> {my.score}</span></td>
                                                                </tr>
                                                            ))
                                                            : null}
                                                    </>
                                                )}
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

const mapStateToProps = (state) => {
    const { getStudentProgressReducer } = state;
    return {
        getStudentProgressReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProgress: () =>
            dispatch(
                getStudentProgress("http://localhost:8000/courses/api/studentprogress/")
            ),
    };
};
const ConnectedClassProgress = connect(mapStateToProps, mapDispatchToProps)(ClassProgress);

export default ConnectedClassProgress
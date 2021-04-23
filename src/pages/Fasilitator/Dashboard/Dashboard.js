import React, { useEffect, useRef } from 'react';

import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import Chat from '../../../components/Chat';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyClassFasilitator } from '../../../Redux/ActionCreators/GetMyClassFasilitator'

function DashboardFasilitator(props) {
    const {
        getMyClassFasilitatorReducer,
        getMyClass,
    } = props
    const getRef = useRef();
    useEffect(() => {
        if (!getRef.current) {
            getMyClass();
            getRef.current = true;
        }
    })
    return (
        <>
            <MobileNav />
            <div className="dashboard-container">
                <SideMenu />
                <div id="dashboard-peserta">
                    <div className="news-card r-10px">
                        <h5 className="news-title">News</h5>
                        <div className="news-image-container">
                            <img className="w-100" src="../images/img/news-image-1.jpg" alt="microsoft" />
                            <div className="carousel-indicators">
                                {/* <button className="active" type="button"></button>
                                    <button type="button"></button>
                                    <button type="button"></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="news-card r-10px mt-3">
                        <div className="d-flex flex-row justify-content-between">
                            <h5 className="news-title px-5">My Class</h5>
                            <img src="../images/icons/calendar-icon.svg" alt="" className="px-4" />
                        </div>
                        <h5 className="news-title px-5 text-center">October 2020</h5>
                        <div className="news-image-container mt-3">
                            <div className="d-flex flex-row justify-content-evenly date-group">
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">Fr</span>
                                    <span className="date">12</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">Sa</span>
                                    <span className="date">13</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">Su</span>
                                    <span className="date">14</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">Mo</span>
                                    <span className="date">15</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container active">
                                    <span className="date-day">Tu</span>
                                    <span className="date">16</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">We</span>
                                    <span className="date">17</span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center date-container">
                                    <span className="date-day">Th</span>
                                    <span className="date">18</span>
                                </div>
                            </div>
                            <div className="fasilitator-wrapper">
                                
                                    {getMyClassFasilitatorReducer.isPending ? (
                                        <div> Loading... </div>
                                    ) : (
                                        <>
                                            {getMyClassFasilitatorReducer.isFulfilled
                                                ? getMyClassFasilitatorReducer.results.map((my) => (
                                                    <div class="fasilitator">
                                                    <div class="fasilitator-content align-items-center justify-content-between">
                                                        <span className="text-content mx-4">08.00 - 09.40</span>
                                                        <span className="text-content mx-4" key={my.id_courses}>{my.class_name}</span>
                                                        <span className="text-content mx-4" key={my.id_courses}>{my.student_count} <img src="../images/icons/toga-icon.png" alt="student icon" /> </span>
                                                    </div>
                                                    </div>
                                                ))
                                                : null}
                                        </>
                                    )}

                                <div className="d-flex flex justify-content-center align-items-center mb-4 mt-3">
                                    <Link to="./Dashboard" className="btn btn-primary-color r-15px" type="button"><img src="../images/icons/new-icon.png" className="new-task-img" alt="New-Task" />New Task </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { getMyClassFasilitatorReducer } = state;
    return {
        getMyClassFasilitatorReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: () =>
            dispatch(
                getMyClassFasilitator("http://localhost:8000/courses/api/myClassFasilitator/?page=1&limit=3")
            ),
    };
};

const ConnectedDashboardFasilitator = connect(mapStateToProps, mapDispatchToProps)(DashboardFasilitator);

export default ConnectedDashboardFasilitator
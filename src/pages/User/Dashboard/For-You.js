import React, { Component } from 'react';
import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import Chat from '../../../components/Chat';
import { Link } from "react-router-dom";

class ForYou extends Component {
    render() {
        return (
            <>
                <MobileNav />
                <div className="dashboard-container">
                    <SideMenu />
                    <div id="dashboard-peserta">
                        <div className="news-card r-10px">
                            <h5 className="news-title">News</h5>
                            <div className="news-image-container">
                                <img className="w-100" src="../images/img/news-image-1.jpg" alt="" />
                                <div className="carousel-indicators">
                                    <button className="active" type="button"></button>
                                    <button type="button"></button>
                                    <button type="button"></button>
                                </div>
                            </div>
                        </div>
                        <div className="news-card r-10px mt-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h5 className="news-title px-5">Today, March 16</h5>
                                <img src="../images/icons/calendar-icon.svg" alt="" className="px-4" />
                            </div>
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
                                        <span className="date">12</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center py-3 text-style">
                                    <Link to="./All-Schedule" className="cursor-pointer text-color text-link">All schedule&nbsp;</Link>
                                    <Link to="./For-You" className="cursor-pointer text-color-2 text-link">For You</Link>
                                </div>
                                <div class="hr-sect">8:00</div>
                                <div class="date-detail">
                                    <div class="date-time">
                                        <span class="text-span">Introduction to <br /> Banking Finance <img align="right" class="dots-top" src="../images/icons/3-dots.png" alt="" /></span>
                                        <span class="text-span-1">100 Minutes <img align="right" class="money-top" src="../images/icons/money-icon.png" alt="" /></span>
                                    </div>
                                    <div class="date-time-empty">
                                    </div>
                                </div>
                                <div class="hr-sect">11:00</div>
                                <div class="date-detail">
                                    <div class="date-time">
                                        <span class="text-span">History of Europe <br /> Early 16th Century<img align="right" class="dots-top" src="../images/icons/3-dots.png" alt="" /></span>
                                        <span class="text-span-1">100 Minutes <img align="right" class="history-top" src="../images/icons/history-icon.png" alt="" /></span>
                                    </div>
                                    <div class="date-time-empty">
                                    </div>
                                </div>
                                <div class="hr-sect">Finish</div>
                            </div>
                        </div>
                    </div>
                    <Chat />
                </div>
            </>
        )
    }
}

export default ForYou




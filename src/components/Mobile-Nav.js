import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Mobile_Nav extends Component {
    render() {
        return (
            <nav>
                <div className="mobile-nav r-20px">
                    <div className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile" src="../images/icons/profile-icon.png" alt="profile" /></span>
                    </div>
                    <div className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile" src="../images/icons/dashboard-icon-black.png" alt="dashboard" /></span>
                    </div>
                    <div className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile" src="../images/icons/activity-icon-black.png" alt="activity" /></span>
                    </div>
                    <div className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile style-width" src="../images/icons/chat-bubble-icon.png"
                            alt="" /></span>
                    </div>
                    <div className="item r-10px cursor-pointer">
                        <span><img className="icon-mobile" src="../images/icons/logout-icon.svg" alt="logout" /></span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Mobile_Nav

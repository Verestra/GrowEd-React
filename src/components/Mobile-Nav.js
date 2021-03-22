import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Mobile_Nav extends Component {
    render() {
        return (
            <nav>
                <div className="mobile-nav r-20px">
                    <Link to="./Profile" className="item r-10px cursor-pointer text-link">
                        <span> <img className="icon-mobile" src="../images/icons/profile-icon.png" alt="profile" /></span>
                    </Link>
                    <Link to="./All-Schedule" className="item r-10px cursor-pointer text-link">
                        <span> <img className="icon-mobile" src="../images/icons/dashboard-icon-black.png" alt="dashboard" /></span>
                    </Link>
                    <Link to="./Activity" className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile" src="../images/icons/activity-icon-black.png" alt="activity" /></span>
                    </Link>
                    <div className="item r-10px cursor-pointer">
                        <span> <img className="icon-mobile style-width" src="../images/icons/chat-bubble-icon.png"
                            alt="" /></span>
                    </div>
                    <Link to="/" className="item r-10px cursor-pointer">
                        <span><img className="icon-mobile" src="../images/icons/logout-icon.svg" alt="logout" /></span>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Mobile_Nav

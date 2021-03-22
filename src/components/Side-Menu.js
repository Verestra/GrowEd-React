import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Side_Menu extends Component {
    render() {
        return (
                <aside className="bg-white">
                <div className="notification">
                    <img className="cursor-pointer" align="right" src="../images/icons/notification-icon-black.svg" alt="" />
                </div>
                <div className="avatar-container cursor-pointer">
                    <img src="../images/photo-profile/profile-picture.png" className="avatar-image" alt="" />
                    <span className="avatar-name-black">Emir Kharisma</span>
                    <span className="avatar-status=black mt-1">Online</span>
                </div>
                <div className="menu-container">
                    <div className="side-link cursor-pointer">
                        <img src="../images/icons/dashboard-icon.svg" alt="" />
                        Dashboard
                    </div>
                    <div className="side-link cursor-pointer" >
                        <img src="../images/icons/activity-icon.svg" alt="" />
                        Activity
                    </div>
                    <div className="side-link cursor-pointer" >
                        <img src="../images/icons/settings-icon.png" alt="" />
                        Settings
                    </div>
                    <div className="side-link cursor-pointer">
                        <img src="../images/icons/help-icon.svg" alt="help" />
                        Help
                    </div>
                    <div className="side-link cursor-pointer">
                        <img src="../images/icons/logout-icon.svg" className="menu-icon text-danger" alt="Logout Icon" />
                        <span className="text-danger">Logout</span>
                    </div>
                    </div>
                 </aside>
            
        )
    }
}

export default Side_Menu

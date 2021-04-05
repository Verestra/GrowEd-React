import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Notifications from './Notification'


class SideMenu extends Component {
    render() {
        return (
           
                <aside className="bg-white">
                <div className="notification">
                    <Notifications />
                </div>
                
                <Link to="./Profile" className="avatar-container cursor-pointer text-link">
                    <img src="../images/photo-profile/profile-picture.png" className="avatar-image" alt="" />
                    <span className="avatar-name-black">Emir Kharisma</span>
                    <span className="avatar-status=black mt-1">Online</span>
                </Link>
                
                <div className="menu-container">
                    <Link to="./Dashboard" className="side-link cursor-pointer text-link">
                        <img src="../images/icons/dashboard-icon.svg" alt="" />
                        Dashboard
                    </Link>
                    <Link to="./Activity" className="side-link cursor-pointer text-link" >
                        <img src="../images/icons/activity-icon.svg" alt="" />
                        Activity
                    </Link>
                    <Link to="./Settings" className="side-link cursor-pointer text-link">
                        <img src="../images/icons/settings-icon.png" alt="" />
                        Settings
                    </Link>
                    <Link to="./Help" className="side-link cursor-pointer text-link">
                        <img src="../images/icons/help-icon.svg" alt="help" />
                        Help
                    </Link>
                    <Link to="/" className="side-link cursor-pointer text-link">
                        <img src="../images/icons/logout-icon.svg" className="menu-icon text-danger" alt="Logout Icon" />
                        <span className="text-danger">Logout</span>
                    </Link>
                    </div>
                 </aside>
            
        )
    }
}

export default SideMenu

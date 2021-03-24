import React, { Component } from 'react';
import MobileNav from '../../components/Mobile-Nav';
import SideMenu from '../../components/Side-Menu';

export class Profile extends Component {
    render() {
        return (
            <>
            <MobileNav />
            <div class="dashboard-container">
                <SideMenu />
                <div id="main-content">
                    <div class="image-cover-container">
                        <img src="../images/img/profile-background.png" alt="Profile Background" class="image-cover" />
                        <div class="avatar-lg">
                            <div class="d-flex">
                                <img src="../images/photo-profile/profile-picture.png" class="avatar-image-lg" alt="Avatar" />
                                <img src="../images/icons/edit-icon.svg" class="edit-avatar" alt="Edit Icon" />
                            </div>
                            <span>Emir Kharisma</span>
                        </div>
                    </div>
                    <div class="profile-setting">
                        <h1>Profile Setting</h1>
                        <div class="setting-list">

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/phone-icon.svg" alt="Phone Icon" class="setting-icon" />
                                    Phone Number
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
                                    </div>
                                </div>
                            </div>

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/triple-star-icon.svg" alt="Triple Start Icon"
                                                class="setting-icon" />
                                    Change Password
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
                                    </div>
                                </div>
                            </div>

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/chat-icon.svg" alt="Chat Icon" class="setting-icon" />
                                    Chat Settings
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
                                    </div>
                                </div>
                            </div>

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/no-notification-icon.svg" alt="No Notifications Icon"
                                                class="setting-icon" />
                                    Push Notifications
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
                                    </div>
                                </div>
                            </div>

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/privacy-icon.svg" alt="Security & Priv"
                                                class="setting-icon" />
                                    Privacy and Security
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
                                    </div>
                                </div>
                            </div>

                            <div class="setting-container ">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div>
                                            <img src="../images/icons/storage-icon.svg" alt="Storage Icon"
                                                class="setting-icon" />
                                    Data and Storage
                                </div>
                                        <img src="../images/icons/forward-icon.svg" alt="Forward Icon" />
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

export default Profile
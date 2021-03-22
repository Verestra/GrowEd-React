import React, { Component } from 'react';

class Chat_Pages extends Component {
    render() {
        return (
            <>
                <div class="dashboard-container">  
                    <aside id="chat-container" class="m-0">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <a href="all-schedule.html"><img src="images/icons/back-arrow-icon.svg" class="back-arrow-icon" alt="Back" /></a>
                            <h3 class="mb-0">Message</h3>
                            <img src="images/icons/circle-plus-icon.svg" alt="" />
                        </div>
                        <div class="search-box p-2 r-20px">
                            <img src="images/icons/search-icon.svg" alt="search icon" />
                            <input type="text" placeholder="Search" />
                        </div>
                        <div class="message-list">
                            <div class="message">
                                <img src="images/photo-profile/profile-nisa.png" alt="Nisa Sabyan" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Nisa Sabyan</span></div>
                                        <div class="message-content">How about number 3?</div>
                                    </div>
                                    <div class="message-time-received">10.15 pm</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-rio.png" alt="Rio Dewanto" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Rio Dewanto</span></div>
                                        <div class="message-content">I'm hungry</div>
                                    </div>
                                    <div class="message-time-received">9.12 pm</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-group21.png" alt="Group 21" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Discussion Group 21 (5)</span></div>
                                        <div class="message-content">Nissa: Let's finish the task tomorrow</div>
                                    </div>
                                    <div class="message-time-received">1.23 pm</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-isyana.png" alt="Isyana Sarasvati" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Isyana Sarasvati</span></div>
                                        <div class="message-content">Thanks.</div>
                                    </div>
                                    <div class="message-time-received">Yesterday</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-tompi.png" alt="Tompi" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Tompi</span></div>
                                        <div class="message-content">See you later!</div>
                                    </div>
                                    <div class="message-time-received">Yesterday</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-group.png" alt="Friend" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>You, Tompi, Isyana Sarasvati, Peppy</span></div>
                                        <div class="message-content">Haha. Yes, I heard it before that you and rossa.</div>
                                    </div>
                                    <div class="message-time-received">8/10</div>
                                </div>
                            </div>

                            <div class="message">
                                <img src="images/photo-profile/profile-peppy.png" alt="Peppy" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Peppy</span></div>
                                        <div class="message-content">Haha me too</div>
                                    </div>
                                    <div class="message-time-received">7/10</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-sandra.png" alt="Sandra Dewi" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Sandra Dewi</span></div>
                                        <div class="message-content">How about number 4?</div>
                                    </div>
                                    <div class="message-time-received">1/10</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-reza.png" alt="Reza Rahadian" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Reza Rahadian</span></div>
                                        <div class="message-content">I'm Hungry</div>
                                    </div>
                                    <div class="message-time-received">1/10</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-group23.png" alt="Group 23" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Discussion Group 23 (5)</span></div>
                                        <div class="message-content">Nissa : Let’s finish the task for tomorrow me too</div>
                                    </div>
                                    <div class="message-time-received">22/9</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-raisa.png" alt="Raisa" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Raisa</span></div>
                                        <div class="message-content">Thanks</div>
                                    </div>
                                    <div class="message-time-received">21/9</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-adrian.png" alt="dr. Adrian" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>dr.Adrian</span></div>
                                        <div class="message-content">See you later!</div>
                                    </div>
                                    <div class="message-time-received">21/9</div>
                                </div>
                            </div>
                            <div class="message">
                                <img src="images/photo-profile/profile-uus.png" alt="Uus" />
                                <div class="d-flex flex-row justify-content-between flex-grow-1">
                                    <div>
                                        <div class="sender-name"><span>Uus</span></div>
                                        <div class="message-content">Haha me too</div>
                                    </div>
                                    <div class="message-time-received">11/8</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </>
        )
    }
}

export default Chat_Pages


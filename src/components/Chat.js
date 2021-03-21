import React, { Component } from 'react'

class Chat extends Component {
    render() {
        return (
            <aside id="chat-container" className="m-0">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h3 className="mb-0">Message</h3>
                <img src="images/icons/circle-plus-icon.svg" alt="" />
            </div>
            <div className="search-box p-2 r-20px">
                <img src="images/icons/search-icon.svg" alt="search icon" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="message-list">
                <div className="message">
                    <img src="images/photo-profile/profile-nisa.png" alt="Nisa Sabyan" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Nisa Sabyan</span></div>
                            <div className="message-content">How about number 3?</div>
                        </div>
                        <div className="message-time-received">10.15 pm</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-rio.png" alt="Rio Dewanto" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Rio Dewanto</span></div>
                            <div className="message-content">I'm hungry</div>
                        </div>
                        <div className="message-time-received">9.12 pm</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-group21.png" alt="Group 21" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Discussion Group 21 (5)</span></div>
                            <div className="message-content">Nissa: Let's finish the task tomorrow</div>
                        </div>
                        <div className="message-time-received">1.23 pm</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-isyana.png" alt="Isyana Sarasvati" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Isyana Sarasvati</span></div>
                            <div className="message-content">Thanks.</div>
                        </div>
                        <div className="message-time-received">Yesterday</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-tompi.png" alt="Tompi" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Tompi</span></div>
                            <div className="message-content">See you later!</div>
                        </div>
                        <div className="message-time-received">Yesterday</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-group.png" alt="Friend" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>You, Tompi, Isyana Sarasvati, Peppy</span></div>
                            <div className="message-content">Haha. Yes, I heard it before that you and rossa.</div>
                        </div>
                        <div className="message-time-received">8/10</div>
                    </div>
                </div>

                <div className="message">
                    <img src="images/photo-profile/profile-peppy.png" alt="Peppy" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Peppy</span></div>
                            <div className="message-content">Haha me too</div>
                        </div>
                        <div className="message-time-received">7/10</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-sandra.png" alt="Sandra Dewi" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Sandra Dewi</span></div>
                            <div className="message-content">How about number 4?</div>
                        </div>
                        <div className="message-time-received">1/10</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-reza.png" alt="Reza Rahadian" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Reza Rahadian</span></div>
                            <div className="message-content">I'm Hungry</div>
                        </div>
                        <div className="message-time-received">1/10</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-group23.png" alt="Group 23" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Discussion Group 23 (5)</span></div>
                            <div className="message-content">Nissa : Let’s finish the task for tomorrow me too</div>
                        </div>
                        <div className="message-time-received">22/9</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-raisa.png" alt="Raisa" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Raisa</span></div>
                            <div className="message-content">Thanks</div>
                        </div>
                        <div className="message-time-received">21/9</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-adrian.png" alt="dr. Adrian" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>dr.Adrian</span></div>
                            <div className="message-content">See you later!</div>
                        </div>
                        <div className="message-time-received">21/9</div>
                    </div>
                </div>
                <div className="message">
                    <img src="images/photo-profile/profile-uus.png" alt="Uus" />
                    <div className="d-flex flex-row justify-content-between flex-grow-1">
                        <div>
                            <div className="sender-name"><span>Uus</span></div>
                            <div className="message-content">Haha me too</div>
                        </div>
                        <div className="message-time-received">11/8</div>
                    </div>
                </div>
            </div>
        </aside>
        )
    }
}

export default Chat

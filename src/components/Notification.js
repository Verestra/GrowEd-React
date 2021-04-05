import React, { useState } from 'react';
import Modal from 'react-modal';
// import { Link } from "react-router-dom";


const customStyles = {
    content: {
        position: 'absolute',
        overflow: 'auto',
        top: '2%',
        right: '38%',
        bottom: '0%',
        left: '22%',
        borderRadius: '10px',
        backgroundColor: 'rgba(87,132,186,1)'
    },
    overlay: {

        position: 'fixed',
        backgroundColor: 'rgb(230,237,246)'
    }
};


function Notifications() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <Modal isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>

                <span><img onClick={() => setModalIsOpen(false)} className="cursor-pointer" align="right" src="../images/icons/close-notification-icon.png" alt="close" /> </span>
                <div className="d-flex justify-content-center">
                    <span  className="text-color-3 notif-text">Notifications</span>
                </div>
                <div>
                    <span className="text-color-3">Today</span>
                <div class="d-flex flex-row mt-4 align-items-center justify-content-between" >
                    <span className="text-content mx-4"> <img alt="notif" src="../images/icons/notif-icon-1.png" /></span>
                    <span className="text-color-3 mx-4">There are 10 news update for today. Don’t miss it!</span>
                    <span className="text-color-3 mx-4">2 min </span>
                </div>
                </div>
            </Modal>
            <img onClick={() => setModalIsOpen(true)} className="cursor-pointer" align="right" src="../images/icons/notification-icon-black.svg" alt="" />
        </>
    )
}

export default Notifications

import React from 'react';
import "./Notification.css"
import cross from "../images/cross.png";

const Notification = (props) => {
    return (
        <div className='modal_notications'>
            <div className='close'>
                <button className='modal_close' onClick={ () => props.onClose()}>
                    <img src={cross} alt="Close"/>
                </button>
            </div>
            <div className="notification_wrapper">
                <div className="notification_item">
                    <div className="item_head">
                        Your Goal Kharkiv
                    </div>
                    <div className="item_body">
                        AD canceled by business owner
                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">
                        Your Goal Kharkiv
                    </div>
                    <div className="item_body">
                        AD canceled by business owner
                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
                <div className="notification_item">
                    <div className="item_head">

                    </div>
                    <div className="item_body">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
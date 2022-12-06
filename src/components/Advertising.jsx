import React from 'react';
import "./Advertising.css"
import cross from "../images/cross.png";
import plus from "../images/$.png";

const Advertising = (props) => {
    const wrapper = document.querySelector("advert_upload")

    return (
        <div className='modal_advertising'>
            <div className='close'>
                <button className='modal_close' onClick={ () => props.onClose()}>
                    <img src={cross} alt="Close"/>
                </button>
            </div>
            <div className="advert_wrap">
                <div className="advert_upload">
                    <div className="advert_button">
                        <label className="advert_button_wrap">
                            <input type="file"/>
                            <img src={plus} alt=""/>
                            <div className='input_button_text'>
                                upload picture
                            </div>
                        </label>
                    </div>
                </div>
                <div className="advert_days">
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Mon'/>
                        <label for="day_checkbox_Mon">M</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Tue'/>
                        <label for="day_checkbox_Tue">T</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Wed'/>
                        <label for="day_checkbox_Wed">W</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Thu'/>
                        <label for="day_checkbox_Thu">T</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Fri'/>
                        <label for="day_checkbox_Fri">F</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Sat'/>
                        <label for="day_checkbox_Sat">S</label>
                    </div>
                    <div className="day_round">
                        <input type="checkbox" id='day_checkbox_Sun'/>
                        <label for="day_checkbox_Sun">S</label>
                    </div>
                </div>
                <div className="advert_time">
                    <p>time: </p>
                    <input type="time"/>
                </div>
                <div className="advert_button_next">
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Advertising;
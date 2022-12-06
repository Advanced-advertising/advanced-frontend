import React from 'react';
import "./Settings.css"
import usa from "../images/United States.png"
import ukr from "../images/Ukraine.png"
import light from "../images/Summer.png"
import dark from "../images/Crescent Moon.png"
import usd from "../images/$.png"
import cross from   "../images/cross.png"
import edit from "../images/Edit icon.png";
const Settings = (props) => {
    return (
        <div className='modal_settings'>
            <div className='close'>
                <button className='modal_close' onClick={ () => props.onClose()}>
                    <img src={cross} alt="Close"/>
                </button>
            </div>
            <p className="settings_name">Name</p>
            <div className="name_input">
                <input type='text' placeholder='Enter your name' value='Yurii Stolbetskyi' required/>
                <i><img src={edit} alt="error"/></i>
            </div>
            <div className="settings_language">
                <div className="modal_title">
                    <p className="language">Language</p>
                </div>
                <div className="modal_buttons">
                    <button><img src={usa} alt="USA"/></button>
                    <button><img src={ukr} alt="Ukr"/></button>
                </div>
            </div>
            <div className="settings_theme">
                <div className="modal_title">
                    <p className="theme">Theme</p>
                </div>
                <div className="modal_buttons">
                    <button><img src={light} alt="Light"/></button>
                    <button><img src={dark} alt="Dark"/></button>
                </div>
            </div>
            <div className="settings_currency">
                <div className="modal_settings">
                    <p className="currency">Currency</p>
                </div>
                <div className="modal_buttons">
                    <button><img src={usd} alt="usd"/></button>

                </div>
            </div>
        </div>
    );
};

export default Settings;
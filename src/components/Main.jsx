import React, {useRef} from 'react';
import {GoogleMap} from "@react-google-maps/api";
import "./Main.css"
import settings from '../images/Gear.png'
import notification from "../images/Notifications icon.png"
import search from "../images/Search.png";
import advert from "../images/advert.png";
import payment from "../images/payment.png";
import { useTranslation } from 'react-i18next';

// const containerStyle = {
//     width: '100%',
//     height: '100%'
// };


const Main = (props) => {
    let expanded = false;
    function showCheckboxes() {
        let checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    let exp = false;
    function showCheckboxes2() {
        let checkboxes2 = document.getElementById("checkboxes2");
        if (!exp) {
            checkboxes2.style.display = "block";
            exp = true;
        } else {
            checkboxes2.style.display = "none";
            exp = false;
        }
    }
    return (
        <div className="container">
            <div id="map"></div>

            <script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
              defer
            ></script>
            <div className="buttons">
                <button className='settings mr-8' onClick={() => props.setOpen(true)}><img src={settings} alt=""/></button>
                <button className='notifications' onClick={() => props.setNotifOpen(true)}><img src={notification} alt=""/></button>
                <button className='advertising' onClick={() => props.setAdvertOpen(true)}><img src={settings} alt=""/></button>
                <button className='payment' onClick={() => props.setPaymentOpen(true)}><img src={payment} alt=""/></button>
            </div>
            <div className="search">
                <div className="search_input">
                    <i><img src={search} alt="error"/></i>
                    <input className="input" type='text' placeholder='Search' required/>
                </div>
                <div className="search_options">
                   <div className="option_wrapper">
                       <div className="option">
                           <form>
                               <div className="multiselect">
                                   <div className="selectBox" onClick={showCheckboxes}>
                                       <select>
                                           <option>Category</option>
                                       </select>
                                       <div className="overSelect"></div>
                                   </div>
                                   <div id="checkboxes">
                                       <label htmlFor="one" class="form-control">
                                           <input type="checkbox" id="one"/>Food & Beverage</label>
                                       <label htmlFor="two" class="form-control">
                                           <input type="checkbox" id="two"/>Sport</label>
                                       <label htmlFor="three" class="form-control">
                                           <input type="checkbox" id="three"/>Beauty</label>
                                       <label htmlFor="four" class="form-control">
                                           <input type="checkbox" id="four"/>Entertainment</label>
                                   </div>
                               </div>
                               <div className="multiselect2">
                                   <div className="selectBox2" onClick={showCheckboxes2}>
                                       <select>
                                           <option>City</option>
                                       </select>
                                       <div className="overSelect"></div>
                                   </div>
                                   <div id="checkboxes2">
                                       <label htmlFor="one" className="form-control">
                                           <input type="checkbox" id="one"/>Kharkiv</label>
                                       <label htmlFor="two" className="form-control">
                                           <input type="checkbox" id="two"/>Kyiv</label>
                                       <label htmlFor="three" className="form-control">
                                           <input type="checkbox" id="three"/>Lviv</label>
                                       <label htmlFor="four" className="form-control">
                                           <input type="checkbox" id="four"/>Odessa</label>
                                   </div>
                               </div>
                               <div className="workingTime_option" >
                                   <select required="required">
                                       <option value="">Working time</option>
                                   </select>
                               </div>
                           </form>
                       </div>

                   </div>
                </div>
                <div className="goales_wrapper">
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                    <div className="goal_item">
                        <input type="checkbox"/>
                        <div className="item_content">
                            <div className="goal_title">
                                Your Goal Kharkiv
                            </div>
                            <div className="goal_body">
                                Tankopiya 34B
                            </div>
                        </div>
                        <div className="item_contentAdd">
                            <div className="goal_category">
                                Sport
                            </div>
                            <div className="goal_time">
                                Mon-Sun 7:00 — 23:00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search_button">
                    <button>Next</button>
                </div>
            </div>

        </div>
        // <div className={s.container}>
        //     <GoogleMap
        //         mapContainerStyle={containerStyle}
        //         center={center}
        //         zoom={10}
        //         onLoad={onLoad}
        //         onUnmount={onUnmount}
        //     >
        //         { /* Child components, such as markers, info windows, etc. */ }
        //         <></>
        //     </GoogleMap>
        // </div>
    );
};

export default Main;
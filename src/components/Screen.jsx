import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './Screen.css';

function Screen() {
    const [selectedType, setSelectedType] = useState('type1');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const {state} = useLocation();
    const business_data = state.business;
    console.log("BUSINESS DATA -----", business_data)
    const screen_data = state.screen_data;
    const categories = state.categories;

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    return (
        <div className="screen-container">
            <div className="object-image">
                <img src={"https://content2.rozetka.com.ua/goods/images/big/165921172.jpg"} className="object-image" />
            </div>
            <div className="spacer"></div>
            <div className="object-details">
                <h2>Name: {screen_data.screen_name}</h2>
                <p>Description: {screen_data.characteristics}</p>
                <p>Price per 30 seconds: {screen_data.price_per_time}</p>
                <p>Traffic: {screen_data.traffic}</p>
                <hr />
                <p>Business name: {business_data.business_name}</p>
                <p>Phone number: {business_data.phone_number}</p>
                <p>Email: {business_data.email}</p>
                <p>Categories: </p>
                {business_data.categories?.map((cat) => (
                    <button className="oval-button">{cat.category_name}</button>
                ))}
                <div className="type-radio">
                    <label>
                        <input
                            type="radio"
                            value="type1"
                            checked={selectedType === 'type1'}
                            onChange={handleTypeChange}
                        />
                        Тип 1
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="type2"
                            checked={selectedType === 'type2'}
                            onChange={handleTypeChange}
                        />
                        Тип 2
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="type3"
                            checked={selectedType === 'type3'}
                            onChange={handleTypeChange}
                        />
                        Тип 3
                    </label>
                </div>
                <label>
                    Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </label>

                <button className="rent-button">Rent</button>
            </div>
        </div>
    );
}

export default Screen;
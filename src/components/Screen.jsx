import React, { useEffect, useState } from "react";
import './Screen.css';

function Screen() {
    const [selectedType, setSelectedType] = useState('type1');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
                <h2>Название объекта</h2>
                <p>Описание объекта.</p>
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
                    Адрес:
                    <input type="text" />
                </label>
                <label>
                    Начальная дата:
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </label>
                <label>
                    Конечная дата:
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                </label>

                <button className="rent-button">Арендовать</button>
            </div>
        </div>
    );
}

export default Screen;
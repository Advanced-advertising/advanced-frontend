import React, { useEffect, useState } from "react";
import './Optimize.css';

function CreateAd() {
    const [money, setMoney] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleCalculate = () => {
        // Ваша логика расчетов здесь
        console.log('Рассчитано');
    };

    return (
        <div className="AppOptimize">
            <header className="App-header">
                <div className="form-container">
                    <label>
                        Количество денег:
                        <input
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                        />
                    </label>
                    <label>
                        Страна:
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </label>
                    <label>
                        Город:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    <label>
                        Первая дата:
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Вторая дата:
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </label>
                    <button className="calculate-button" onClick={handleCalculate}>
                        Рассчитать
                    </button>
                </div>
            </header>
        </div>
    );
}

export default CreateAd;
import React, { useEffect, useState } from "react";
import './Optimize.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Optimize() {
    const [money, setMoney] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [categoryIDs, setCategoryIDs] = useState([])
    const handleCategoryClick = (id) => {
        if (categoryIDs.includes(id)) {
            setCategoryIDs(c => c.filter(category => category.category_id != id))
        } else {
            setCategoryIDs(c => [...c, id]);
        }
    }

    const [categories, setCategories] = useState([]);
    const [businessData, setBusinessData] = useState({});
    const [optimalScreens, setOptimalScreens] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('userToken');
            try {
                const response = await axios.get(
                    'http://localhost:4000/categories/get_all',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    async function findOptimalScreens() {
        let _optimalScreens;
        try {
            const response = await axios.post(
                'http://localhost:4000/screens/find_optimal_screens',
                {
                    user_budget: parseInt(money),
                    ad_category_ids: categoryIDs,
                }
            );
            setOptimalScreens(response.data);
            _optimalScreens = response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        const business_id = _optimalScreens[0].business_id;

        try {
            const response = await axios.post(
                'http://localhost:4000/businesses/get_business_info_by_id',
                `${business_id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setBusinessData(response.data);
        } catch (error) {
            console.error('Error fetching business data:', error);
        }
    }

    return (
        <div className="AppOptimize flex flex-col">
            <header className="App-header">
                <div className="form-container">
                    <label>
                        Amount of money:
                        <input
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                        />
                    </label>
                    <label>
                        Country:
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>
                    <ul>
                    {categories.map((object) => (
                        <li key={object.category_id} >
                            <div className="checkbox-container">
                                <label className="checkbox-label">

                                    <input
                                        type="checkbox"
                                        checked={categoryIDs.includes(object.category_id)}
                                        onChange={() => handleCategoryClick(object.category_id)}
                                    />
                                    {object.category_name}
                                </label>
                            </div>
                        </li>
                    ))}
                    </ul>
                    <button className="calculate-button" onClick={findOptimalScreens}>
                        Optimize
                    </button>
                </div>
            </header>
            <div>
                {optimalScreens.map(({screen_id, screen_name}) => {
                    return <div key={`optimal-screen-${screen_id}`}>{screen_name}</div>
                })}
            </div>
            {(optimalScreens.length > 0) && (
                <main className="App-main">
                    <p style={{ color: 'black', textAlign: 'center', fontSize: '30px'  }}>Screen List</p>
                    <ul className="object-list">
                        {optimalScreens.map(({screen_id, screen_name, price_per_time, ...optimalScreenRest}, index) => (
                            <Link key={`optimal-screen-${screen_id}-${index}`} to="/screen"
                                state={{
                                    screen_data: {screen_id, screen_name, price_per_time, ...optimalScreenRest},
                                    business: businessData,
                                    categories,
                                }}
                            >
                                <img src={"https://content2.rozetka.com.ua/goods/images/big/165921172.jpg"} className="object-image" />
                                <div className="object-details">
                                    <h2>{screen_name}</h2>
                                    <h2>Price per 30 seconds: {price_per_time}$</h2>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </main>
            )}
        </div>
    );
}

export default Optimize;
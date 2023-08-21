import React, {useEffect, useState} from 'react';
import './BusinessScreens.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AppBusinessScreens() {
    const {state} = useLocation();
    const business_data = state.business;
    const [screens, setScreens] = useState([]);
    const [categories, setCategories] = useState([]);

    console.log(state)
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('userToken');
            console.log(token)
            try {
                const response = await axios.post(
                    'http://localhost:4000/screens/get_all_by_business_id',
                    business_data.business_id,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setScreens(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('userToken');
            console.log(token)
            try {
                const response = await axios.post(
                    'http://localhost:4000/businesses/get_categories',
                    business_data.business_id,
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

    return (
        <div className="App">
            <header className="App-header">
                <div className="object-details">
                    <img src={'https://via.placeholder.com/150'} className="object-image" />
                    <h2>{business_data.business_name}</h2>
                    <p>{business_data.email}</p>
                    <p>{business_data.phone_number}</p>
                    <p>Business categories: </p>
                    {categories.map((cat) => (
                        <button className="oval-button">{cat.category_name}</button>
                    ))}
                </div>
            </header>
            <main className="App-main">
                <p style={{ color: 'black', textAlign: 'center', fontSize: '30px'  }}>Screen List</p>
                <ul className="object-list">
                    {screens.map((object) => (
                        <Link to='/screen' state={{ screen_data: object, business: business_data, categories: categories}} key={object.screen_id} >
                            <img src={"https://content2.rozetka.com.ua/goods/images/big/165921172.jpg"} className="object-image" />
                            <div className="object-details">
                                <h2>{object.screen_name}</h2>
                                <h2>Price per 30 seconds: {object.price_per_time}$</h2>
                            </div>
                        </Link>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default AppBusinessScreens;
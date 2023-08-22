import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Screen.css';

/***
 * @param screenPrice - Price per 30 seconds
 * @param duration - Duration in seconds
 */
function calculateAdOrderPrice(screenPrice, duration) {
    return (screenPrice / 30) * duration;
}

function Screen() {
    const [selectedAdId, setSelectedAdId] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [adDuration, setAdDuration] = useState();

    const [ads, setAds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('userToken');
            try {
                const response = await axios.get(
                    'http://localhost:4000/ad/get_user_ads',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setAds(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const {state} = useLocation();
    const business_data = state.business;
    const screen_data = state.screen_data;
    const categories = state.categories;

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        setEndDate(event.target.value);
    };

    async function createAdOrder() {
        const token = localStorage.getItem('userToken');
        try {
            const response = await axios.post(
                'http://localhost:4000/users/create_ad_order',
                {
                    start_time: new Date(startDate).getTime(),
                    end_time: new Date(endDate).getTime(),
                    price: calculateAdOrderPrice(screen_data.price_per_time, adDuration),
                    ad_id: selectedAdId,
                    screen_id: screen_data.screen_id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            setAds(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function handleRent() {
        await createAdOrder();
        alert("Created order successfully");
    }

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
                    {ads?.filter(ad => ad.status === "Approved")
                        .map(({ad_id, ad_name, img_url, status: ad_status}) => (
                        <div key={`ad-${ad_id}`} className="bg-orange-50 p-5 my-5 w-fit">
                            <input
                                id={`ad-input-${ad_id}`}
                                type="radio"
                                value="type1"
                                checked={selectedAdId === ad_id}
                                onChange={() => setSelectedAdId(ad_id)}
                            />
                            <label htmlFor={`ad-input-${ad_id}`} >
                                <img src={img_url} alt={ad_name} className="w-36" />
                                <h3>{ad_name}</h3>
                                <p>Status: {ad_status}</p>
                            </label>
                        </div>
                    ))}
                </div>
                <label>
                    Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </label>

                <input type="number" placeholder="Ad duration (seconds)" value={adDuration} onChange={e => setAdDuration(parseInt(e.target.value))}/>

                <button className="rent-button" onClick={handleRent}>Rent</button>
            </div>
        </div>
    );
}

export default Screen;
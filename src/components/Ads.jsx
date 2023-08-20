import React, {useEffect, useState} from 'react';
import './Business.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Ads() {
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


    return (
        <div className="App">
            <ul className="object-list-business">
                <p style={{ color: 'black', textAlign: 'center', fontSize: '30px'}}>Your ads</p>
                <Link to="create_ad" style={{ color: 'black', textAlign: 'center', fontSize: '20px'}} ><h1>Create new ad +</h1></Link>
                {ads.map((object) => (
                    <li key={object.ad_id} >
                        <li className="object-item">
                            <img src={ads.img_url} className="object-image" />
                            <div className="object-details">
                                <h2 style={{ color: 'black' }}>{object.ad_name}</h2>
                                <p style={{ color: 'black' }}>Status: {object.status}</p>
                            </div>
                        </li>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ads;
import React, {useEffect, useState} from 'react';
import './Business.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Business() {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4000/businesses/get_all');
                setBusinesses(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <ul className="object-list-business">
                    <p style={{ color: 'black', textAlign: 'center', fontSize: '30px'}}>Businesses</p>
                    {businesses.map((object) => (
                        <Link to='/business_screens' state={{ business: object}} key={object.business_id} >
                        <li className="object-item">
                            <img src={'https://via.placeholder.com/150'} className="object-image" />
                            <div className="object-details">
                                <h2 style={{ color: 'black' }}>{object.business_name}</h2>
                                <p style={{ color: 'black' }}>Телефон: {object.phone_number}</p>
                            </div>
                        </li>
                        </Link>
                    ))}
                </ul>
        </div>
    );
}

export default Business;
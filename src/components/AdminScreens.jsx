import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function AdminScreens() {
    const [screens, setScreens] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('adminToken');
            console.log(token)
            try {
                const response = await axios.get(
                    'http://localhost:4000/screens/get_all',
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

    const handleBlock = () => {};
    return (
        <div className="object-list">
            <div className="flex flex-col gap-5">

            <Link to="/admin/create-screen" className="primary-button">Create new</Link>
            <ul>
                {screens.map(({screen_name}, index) => (
                    <li key={index}>
                        {screen_name}
                        <button className="primary-button">Edit</button>
                        <button className="block-button">Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function AdminAds() {
    const [ads, setAds] = useState([]);

    const fetchData = async () => {
        const token = localStorage.getItem('adminToken');
        console.log(token)
        try {
            const response = await axios.get(
                'http://localhost:4000/ad/get_all',
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

    useEffect(() => {
        fetchData();
    }, []);

    async function approveAd({adId}) {

        const token = localStorage.getItem('adminToken');
        console.log(token)
        try {
            const response = await axios.post(
                'http://localhost:4000/admin/change_ad_status',
                {
                  ad_id: adId,
                  new_status: "Approved",
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const handleBlock = () => {};
    return (
        <div className="object-list">
            <div className="flex flex-col gap-5">

                <Link to="/admin/create-screen" className="primary-button">Create new</Link>
                <ul>
                    {ads.map(({ad_id, ad_name, img_url, status, user_id}) => (
                        <li key={`ad-${ad_id}`} className="flex flex-col my-8 bg-orange-100 p-4 border-4 rounded-md border-orange-200">
                            <img src={img_url} className="w-72 self-center" />
                            <div className="flex my-3">
                            <h2>{ad_name}</h2>
                            <span className="mx-2">[status: {status}]</span>
                            {status === "Unverified" && (
                                    <button className="warning-button" onClick={() => approveAd({adId: ad_id})}>Approve</button>
                            )}
                            <button className="primary-button">Edit</button>
                            <button className="block-button">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

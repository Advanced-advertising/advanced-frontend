import React, { useEffect, useState } from "react";
import './Optimize.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateAd() {
    const navigate = useNavigate();

    const [adName, setAdName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [checkedCategoryId, setCheckedCategoryId] = useState();

    const [categories, setCategories] = useState([]);

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

    const handleCalculate = async () => {
        const token = localStorage.getItem('userToken');
        // Ваша логика расчетов здесь
        const res = await fetch("http://localhost:4000/ad/create", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ad_name: adName,
                img_url: imgUrl,
                categories_id: [checkedCategoryId],
            }),
        });

        // const j = await res.json();

        alert("Ad created successfully");
        navigate("/user_ads")
    };

    return (
        <div className="AppOptimize">
            <header className="App-header">
                <div className="form-container">
                    <label>
                        Ad name:
                        <input
                            type="text"
                            value={adName}
                            onChange={(e) => setAdName(e.target.value)}
                        />
                    </label>
                    <label>
                        Img url:
                        <input
                            type="text"
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                    </label>

                    <label>Categories</label>
                    {categories.map((object) => (
                        <li key={object.category_id} >
                            <div className="checkbox-container">
                                <label className="checkbox-label">

                                    <input
                                        type="checkbox"
                                        checked={object.category_id === checkedCategoryId}
                                        onChange={() => setCheckedCategoryId(object.category_id)}
                                    />
                                    {object.category_name}
                                </label>
                            </div>
                        </li>
                    ))}
                    <button className="calculate-button" onClick={handleCalculate}>
                        Create new ad
                    </button>
                </div>
            </header>
        </div>
    );
}

export default CreateAd;
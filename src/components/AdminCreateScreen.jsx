import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function AdminCreateScreen() {
    const [businesses, setBusinesses] = useState([]);
    const [checkedBusinessId, setCheckedBusinessId] = useState();
    const [addressName, setAddressName] = useState("");

    const [screenName, setScreenName] = useState("");
    const [pricePerTime, setPricePerTime] = useState();
    const [characteristics, setCharacteristics] = useState("");
    const [traffic, setTraffic] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/businesses/get_all');
                setBusinesses(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const createAddress = async () => {
        const token = localStorage.getItem('adminToken');
        console.log(token)
        try {
            const response = await axios.post(
                'http://localhost:4000/admin/create_address',
                {
                    address_name: addressName,
                    business_id: checkedBusinessId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            // setScreens(response.data);
            console.log(response.data)

            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const createScreen = async ({addressId}) => {
        const token = localStorage.getItem('adminToken');
        console.log(token)
        try {
            const response = await axios.post(
                'http://localhost:4000/admin/create_screen',
                {
                    screen_name: screenName,
                    price_per_time: parseInt(pricePerTime),
                    characteristics,
                    traffic: parseInt(traffic),
                    business_id: checkedBusinessId,
                    address_id: addressId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            // setScreens(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const createScreenFull = async () => {
        const {address_id: addressId} = await createAddress();
        const business = await createScreen({addressId});

        console.log("BUSINESS CREATED?? (I mean screen)", business);
    }

    return (
        <div className="admin-panel">
            <h2>Администрирование</h2>
            <div className="flex bg-[orange]">
                <ul className="category-list">
                    <li className='ads' > Реклама </li>
                    <li className="selected" > Экраны </li>
                    <li className='users'> Пользователи </li>
                </ul>
                <div className="flex">
                    <div className="flex flex-col">

                    {businesses.map(({business_id, business_name}) => <div key={`business-${business_id}`} className="flex items-center">
                        <input type="radio"
                               className="w-5 h-5"
                               checked={checkedBusinessId === business_id}
                             onChange={() => setCheckedBusinessId(business_id)}
                        />
                        <label className="whitespace-nowrap">
                            {business_name}
                        </label>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-col">
                        <input type="text" placeholder="Address" value={addressName}
                        onChange={e => setAddressName(e.target.value)}/>
                        <input type="text" placeholder="Screen name" value={screenName}
                               onChange={e => setScreenName(e.target.value)}/>
                        <input type="number" placeholder="Price per time" value={pricePerTime}
                               onChange={e => setPricePerTime(e.target.value)}/>
                        <input type="text" placeholder="Characteristics" value={characteristics}
                               onChange={e => setCharacteristics(e.target.value)}/>
                        <input type="number" placeholder="Traffic" value={traffic}
                               onChange={e => setTraffic(e.target.value)}/>
                    </div>
                </div>
                <button onClick={createScreenFull} className="h-fit p-3 bg-blue-500 text-white">Create screen</button>
            </div>
        </div>
    )
}

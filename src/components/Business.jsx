
import React, {useRef} from 'react';
import './Business.css';

const objects = [
    {
        id: 1,
        name: 'Бизнес 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 10,
        name: 'Бизнес 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 20,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 30,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 11,
        name: 'Бизнес 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 24,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 38,
        name: 'Бизнес 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
    },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ul className="object-list">
                    {objects.map((object) => (
                        <li key={object.id} className="object-item">
                            <img src={object.image} alt={object.name} className="object-image" />
                            <div className="object-details">
                                <h2>{object.name}</h2>
                                <p>Телефон: {object.phone}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
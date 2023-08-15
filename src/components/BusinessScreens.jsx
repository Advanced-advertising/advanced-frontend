import React, {useRef} from 'react';
import './BusinessScreens.css';

const objects = [
    {
        id: 1,
        name: 'Экран 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 1.',
    },
    {
        id: 2,
        name: 'Экран 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 2.',
    },
    {
        id: 12,
        name: 'Экран 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 1.',
    },
    {
        id: 22,
        name: 'Экран 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 2.',
    },
    {
        id: 11,
        name: 'Экран 1',
        phone: '123-456-7890',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 1.',
    },
    {
        id: 21,
        name: 'Экран 2',
        phone: '987-654-3210',
        image: 'https://via.placeholder.com/150',
        description: 'Описание объекта 2.',
    },
    // Добавьте больше объектов по аналогии
];

function AppBusinessScreens() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="object-details">
                    <h2>Имя: Бизнесс</h2>
                    <img src={objects[0].image} alt={objects[0].name} className="object-image" />
                    <p>Описание: Лоорен инсуп</p>
                </div>
            </header>
            <main className="App-main">
                <h1>Список экранов</h1>
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
            </main>
        </div>
    );
}

export default AppBusinessScreens;
import React from 'react';

function ObjectList({ category }) {
    let objects = [];

    if (category === 'ads') {
        objects = ['Реклама 1', 'Реклама 2', 'Реклама 3'];
    } else if (category === 'screens') {
        objects = ['Экран 1', 'Экран 2', 'Экран 3'];
    } else if (category === 'users') {
        objects = ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'];
    }

    const handleBlock = (object) => {
        // Ваша логика блокировки здесь
        console.log(`Заблокирован: ${object}`);
    };

    return (
        <div className="object-list">

            <ul>
                {objects.map((object, index) => (
                    <li key={index}>
                        {object}
                        <button className="block-button" onClick={() => handleBlock(object)}>
                            Заблокировать
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ObjectList;

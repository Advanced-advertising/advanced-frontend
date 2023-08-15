import React from 'react';

function AdminPanel({ selectedCategory, onSelectCategory }) {
    return (
        <div className="admin-panel">
            <h2>Администрирование</h2>
            <ul className="category-list">
                <li
                    className={selectedCategory === 'ads' ? 'selected' : ''}
                    onClick={() => onSelectCategory('ads')}
                >
                    Реклама
                </li>
                <li
                    className={selectedCategory === 'screens' ? 'selected' : ''}
                    onClick={() => onSelectCategory('screens')}
                >
                    Экраны
                </li>
                <li
                    className={selectedCategory === 'users' ? 'selected' : ''}
                    onClick={() => onSelectCategory('users')}
                >
                    Пользователи
                </li>
            </ul>
        </div>
    );
}

export default AdminPanel;
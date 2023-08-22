import React from 'react';

function AdminPanel({ selectedCategory, onSelectCategory }) {
    return (
        <div className="admin-panel">
            <h2>Admin</h2>
            <ul className="category-list">
                <li
                    className={selectedCategory === 'ads' ? 'selected' : ''}
                    onClick={() => onSelectCategory('ads')}
                >
                    Ads
                </li>
                <li
                    className={selectedCategory === 'screens' ? 'selected' : ''}
                    onClick={() => onSelectCategory('screens')}
                >
                    Screens
                </li>
                <li
                    className={selectedCategory === 'users' ? 'selected' : ''}
                    onClick={() => onSelectCategory('users')}
                >
                    Users
                </li>
            </ul>
        </div>
    );
}

export default AdminPanel;
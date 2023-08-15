import React, { useEffect, useState } from "react";
import './Admin.css';


import AdminPanel from './AdminPanel';
import ObjectList from './ObjectList';

function AppAdmin() {
    const [selectedCategory, setSelectedCategory] = useState('ads');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="AppAdmin">
            <header className="App-header-admin">
                <AdminPanel
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleSelectCategory}
                />
                <ObjectList category={selectedCategory} />
            </header>
        </div>
    );
}

export default AppAdmin;
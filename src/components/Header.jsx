import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main');
    };
    const handleBusiness = () => {
        navigate('/business');
    };
    const handleMyAds = () => {
        navigate('/');
    };
    const handleOptimize = () => {
        navigate('/optimize');
    };

    return (
        <div>
            <header>
                <button className="button" onClick={handleBusiness}>Business</button>
                <button className="button" onClick={handleMain}>Map</button>
                <button className="button" onClick={handleMyAds}>My ads</button>
                <button className="button" onClick={handleOptimize}>Optimize</button>
            </header>
        </div>
    );
};

export default Header;

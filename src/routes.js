import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Main from './components/Main'
import Ads from './components/Ads'
import Optimize from './components/Optimize'

function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Outlet />,
            children: [
                { path: 'register', element: <RegistrationForm /> },
                { path: 'login', element: <LoginForm /> },
                { path: 'main', element: <Main/> },
                { path: 'user_ads', element: <Ads/> },
                { path: 'optimize', element: <Optimize/> },
            ],
        },
    ]);
}

export default Routes;
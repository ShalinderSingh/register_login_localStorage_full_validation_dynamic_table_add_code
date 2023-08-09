import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirect to the login page after logout
    };

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
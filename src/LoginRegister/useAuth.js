// useAuth.js
import { useState } from 'react';
import { json } from 'react-router-dom';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(
        !!localStorage.getItem('authToken')
    );
    console.log(!!localStorage.getItem('authToken'), 'kkkkkkkkkkkkkkk')
    const login = (token) => {
        console.log(token, ':::::::')
        localStorage.setItem('authToken', JSON.stringify(token));
        setAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthenticated(false);
    };

    return { authenticated, login, logout };
};

export default useAuth;


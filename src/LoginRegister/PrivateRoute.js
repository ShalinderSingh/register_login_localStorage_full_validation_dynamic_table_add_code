import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth'

const PrivateRoute = (props) => {
    const { Component } = props;
    const { authenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(Component, 'authenticatedauthenticated', authenticated)

        if (!authenticated) {
            navigate("/login");
            // navigate('/register')
        } else {
            navigate('/dashboard')
        }
    }, [])
    return (
        <div>
            <Component />
        </div>
    )
};

export default PrivateRoute;
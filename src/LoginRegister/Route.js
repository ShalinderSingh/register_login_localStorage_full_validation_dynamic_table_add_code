import React from 'react'
import Register from './Register';
import { Route, Routes } from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';


const RouteComponent = () => {
    return (

        <Routes>
            <Route path='/' element={< Register />} />

            <Route exact path="/login" element={<PrivateRoute Component={Login} />} />
            <Route exact path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
            {/* <Route exact path='/dashboard' element={<PrivateRoute />}>
                <Route exact path='/dashboard' element={<Dashboard />} />
            </Route> */}
            {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        </Routes>
    )
}

export default RouteComponent
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@components/Home';
import Layout from '@components/Layout/Layout';
import Login from '@pages-auth/Login/Login';
import Register from '@pages-auth/Register/Register';

import '@styles/global.scss';
import Dashboard from '../pages/Dashboard/Dashboard';

const App = () => {
    function PrivateRoute({ children }) {
        const auth = true;
        return auth ? <Layout>{children}</Layout> : <Navigate to="/login" />;
    }

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} exac />
                <Route path="/register" element={<Register />} exac />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default App;

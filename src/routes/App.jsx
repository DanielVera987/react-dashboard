import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '@styles/global.scss';

import { AuthContextState } from '../context/authContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '@pages-auth/Login/Login';
import Register from '@pages-auth/Register/Register';
import Dashboard from '@pages/Dashboard/Dashboard';

const App = () => {
    return (
		<AuthContextState>
			<Routes>
				<Route
					path="/login"
					exac
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>

				<Route
					path="/register"
					exac
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>

				<Route
					path="/"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</AuthContextState>
    );
};

export default App;

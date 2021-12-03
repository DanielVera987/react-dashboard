import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@styles/global.scss';

import { AuthContextState } from '../context/authContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ROUTE from '@config/routes.json';

/********************/
/*	Pages
/********************/
import Login from '@pages-auth/Login/Login';
import Register from '@pages-auth/Register/Register';
import Dashboard from '@pages/Dashboard/Dashboard';

const App = () => {
    return (
		<AuthContextState>
			<Routes>
				<Route
					path={ROUTE.LOGIN}
					exac
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>

				<Route
					path={ROUTE.REGISTER}
					exac
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>

				<Route
					path={ROUTE.HOME}
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

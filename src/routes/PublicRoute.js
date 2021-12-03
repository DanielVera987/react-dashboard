import React, { useContext } from 'react';
import { Navigate } from "react-router";
import ROUTE from '@config/routes.json';

import AuthContext from "../context/authContext";

export default function PublicRoute({children}) {
	const { authState } = useContext(AuthContext);

	return !authState ? children : <Navigate to={ROUTE.HOME} />;
};

import React, { useContext } from 'react';
import { Navigate } from "react-router";
import ROUTE from '@config/routes.json';

import AuthContext from "../context/authContext";
import Layout from "@layout/Layout";

export default function PrivateRoute({children}) {
	const { authState } = useContext(AuthContext);

	return authState ? <Layout>{children}</Layout> : <Navigate to={ROUTE.LOGIN} />;
};

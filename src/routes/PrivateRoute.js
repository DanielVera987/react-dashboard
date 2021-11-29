import React, { useContext } from 'react';
import AuthContext from "../context/authContext";
import Layout from "@layout/Layout";
import { Navigate } from "react-router";

export default function PrivateRoute({children}) {
	const { authState } = useContext(AuthContext);

	return authState ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

import React, { useContext } from 'react';
import AuthContext from "../context/authContext";
import { Navigate } from "react-router";

export default function PublicRoute({children}) {
	const { authState } = useContext(AuthContext);

	return !authState ? children : <Navigate to='/' />;
};

import React, { useReducer } from "react";
import * as ACTIONS from "../store/actions/actions";
import * as AuthReducer from "../store/reducers/authReducer";

const AuthContext = React.createContext();
export default AuthContext;

export const AuthContextState = ({children}) => {
	const [stateAuthReducer, dispatchAuthReducer] = useReducer(
		AuthReducer.AuthReducer,
		AuthReducer.initialState
	);

	const handleLogin = (data) => {
		dispatchAuthReducer(ACTIONS.login(data));
	}

	const handleLogout = () => {
		dispatchAuthReducer(ACTIONS.logout());
	};

	const value = {
		authState: stateAuthReducer.isAuth,
		usernameState: stateAuthReducer.username,
		tokenState: stateAuthReducer.token,
		handleUserLogin: (username) => handleLogin(username),
		handleUserLogout: () => handleLogout(),
	};

	return (
		<AuthContext.Provider value={value} >
			{children}
		</AuthContext.Provider>
	);
};

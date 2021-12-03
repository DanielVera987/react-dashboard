import * as ACTION_TYPE from './action_type';

export const login = (data) => {
	return {
		type: ACTION_TYPE.LOGIN,
		username: data.username,
		token: data.token
	};
};

export const logout = () => {
	return {
		type: ACTION_TYPE.LOGOUT
	};
};

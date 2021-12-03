import * as ACTION_TYPE from "../actions/action_type";

export const initialState = {
	isAuth: false,
	username: "",
	token: ""
};

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGIN:
			return {
				...state,
				isAuth: true,
				username: action.username,
				token: action.token
			};
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				isAuth: false,
				username: "",
				token: ""
			};
		default:
			return state;
	}
};

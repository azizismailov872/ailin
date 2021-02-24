import {SET_USER,SET_USER_NULL} from './types';

const initialState = {
	user: null,
	isAuth: false,
}

export const authReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {...action.user},
				isAuth: true
			}
		case SET_USER_NULL:
			return {
				...state,
				user: null,
				isAuth: false
			}
		default:
			return state;
	}
}
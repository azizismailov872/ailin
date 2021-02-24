import {SET_USERS} from './types';

const initialState = {
	users: [],
	total: null,
	per_page: null,
	current_page: null,
	isLoaded: false
}

export const adminUserReducer = (state = initialState,action) => {
	switch(action.type){
		case SET_USERS:
			return {
				...state,
				users: action.users,
				...action.payload,
				isLoaded: true
			}
		default:
			return state;
	}
}
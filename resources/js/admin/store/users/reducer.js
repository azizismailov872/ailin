import { SET_USERS } from "./types";

const initialState = {
	users: [],
	per_page: null,
	current_page: null,
	total: null,
	isLoaded: false
}

export const userReducer = (state = initialState, action) => {
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
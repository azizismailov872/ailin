import {SET_MODELS} from './types';

const initialState = {
	list: [],
	total: null,
	per_page: null,
	current_page: null,
	isLoaded: false
}


export const registerAppReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_MODELS:
			return {
				...state,
				list: action.list,
				...action.payload,
				isLoaded: true
			}
		default:
			return state;
	}
}
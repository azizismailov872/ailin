import {SET_BOOKS,SET_FETCHING} from './types';
const initialState = {
	books: [],
	current_page: null,
	per_page: null,
	total: null,
	isLoaded: false,
	isFetching: false
}


export const audioBookReducer = (state = initialState, action) => {
	switch(action.type){
		case SET_BOOKS:
			return {
				...state,
				books: action.books,
				...action.payload,
				isLoaded: true,
			}
		case SET_FETCHING:
			return {
				...state,
				isFetching: action.payload
			}
		default:
			return state;
	}
}
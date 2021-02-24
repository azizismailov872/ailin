import {SET_GENRES,SET_FETCHING} from './types';

const initialState = {
	genres: [],
	total: null,
	per_page: null,
	current_page: null,
	isLoaded: false,
	isFetching: false
}


export const podcastGenresReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_GENRES:
			return {
				...state,
				genres: action.genres,
				...action.payload,
				isLoaded: true
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
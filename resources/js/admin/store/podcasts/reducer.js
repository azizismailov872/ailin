import {SET_PODCASTS,SET_FETCHING} from './types';
const initialState = {
	podcasts: [],
	current_page: null,
	per_page: null,
	total: null,
	isLoaded: false,
	isFetching: false
}

export const podcastsReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_PODCASTS:
			return {
				...state,
				podcasts: action.podcasts,
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
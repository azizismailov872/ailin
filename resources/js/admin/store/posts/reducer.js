import {SET_POSTS} from './types.js';

const initialState = {
	posts: [],
	current_page: null,
	per_page: null,
	total: null,
	isLoaded: false,
}

export const postsReducer = (state = initialState, action) => {
	switch(action.type){
		case SET_POSTS:
			return {
				...state,
				posts: action.posts,
				...action.payload,
				isLoaded: true,
			}
		default:
			return state;
	}
}
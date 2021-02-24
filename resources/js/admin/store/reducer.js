import {SET_INITIALIZED} from './types';

const initialState = {
	initialized: false
}

export const appReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: action.payload
			}
		default:
			return state;
	}
}
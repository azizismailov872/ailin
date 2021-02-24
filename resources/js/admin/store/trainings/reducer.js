import {SET_TRAININGS} from './types';

const initialState = {
	trainings: [],
	total: null,
	per_page: null,
	current_page:null,
	isLoaded: null,
}


export const trainingReducer = (state = initialState,action) => {
	switch (action.type) {
		case SET_TRAININGS:
			return {
				...state,
				trainings: action.trainings,
				...action.payload,
				isLoaded: true
			}
		default:
			return state;
	}
}
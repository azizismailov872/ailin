import {searchGenre,getGenres,deleteGenre,createGenre,updateGenre,getGenre,getList} from './../../../api/trainingGenreAPI';
import {SET_GENRES,SET_FETCHING} from './types';


export const setFetching = (payload) => ({type:SET_FETCHING, payload});

export const setGenres = (genres,payload) => ({type: SET_GENRES,genres,payload});


export const getTrainingGenres = (pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await getGenres(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload ={ 
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setGenres(response.data.data,payload));
			dispatch(setFetching(false));
		}
	}
	catch(error)
	{
		if(error.response)
		{
			console.log(error?.response?.data?.message);
		}
	}
}

export const searchTrainingGenres = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await searchGenre(data,pageNumber,pageSize);
		if(response.data)
		{	
			let payload ={ 
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setGenres(response.data.data,payload));
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.response.data.message);
		}
	}
}

export const deleteTrainingGenre = (id) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await deleteGenre(id);
		if(response.data.status === 1)
		{
			return true;
		}
	}catch(error)
	{
		return false;
	}
}

export const createTrainingGenre = (data) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await createGenre(data);
		if(response.data.status === 1)
		{
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{	
			dispatch(setFetching(false));
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const updateTrainingGenre = (data,id) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await updateGenre(data,id);
		if(response.data.status === 1)
		{
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{	
			dispatch(setFetching(false));
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const getTrainingGenre = (id) => async dispatch => {
	try{
		let response = await getGenre(id);
		if(response.data.status === 1)
		{
			return response.data.genre;
		}
	}catch(error)
	{
		if(error.response)
		{
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const getGenresList = () => async dispatch => {
	try{	
		let response = await getList();
		if(response.data.status === 1)
		{
			return response.data.genres;
		}
	}catch(error)
	{
		console.log(error);
	}
}
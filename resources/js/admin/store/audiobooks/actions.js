import {SET_BOOKS,SET_FETCHING} from './types';
import {getModel,getModels,createModel,deleteModel,updateModel,searchModels} from './../../api/audioBookAPI';

const setBooks = (books,payload) => ({type: SET_BOOKS,books,payload});

const setFetching = (payload) => ({type: SET_FETCHING,payload});


export const getAudioBooks = (pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setFetching(false));	
			dispatch(setBooks(response.data.data,payload));
		}
	}catch(error)
	{	
		dispatch(setFetching(false));
		if(error.response)
		{
			console.log('error',error.response.data.message);
		}
	}
}

export const searchAudioBooks = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await searchModels(data,pageNumber,pageSize);
		if(response.data)
		{
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setFetching(false));
			dispatch(setBooks(response.data.data,payload));
		}
	}catch(error)
	{	
		dispatch(setFetching(false));
		if(error.response)
		{
			console.log(error.response);
		}
	}
}

export const updateAudioBook = (data,id,setProgress) => async dispatch => {
	try{
		let response = await updateModel(data,id,setProgress);
		if(response.data.status === 1)
		{
			return {
				status: 1
			}
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


export const createAudioBook = (data,setProgress) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await createModel(data,setProgress);
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


export const deleteAudioBook = (id) => async dispatch => {
	try{
		let response = await deleteModel(id);
		if(response.data.status === 1)
		{
			return {
				status: 1,
			}
		}
	}catch(error)
	{
		if(error.response)
		{
			return {
				status: 0
			}
		}
	}
}


export const getAudioBook = (id) => async dispatch => {
	try{
		let response = await getModel(id);
		if(response.data.status === 1)
		{
			return response.data.book;
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log('error',error.response);
		}
	}
}
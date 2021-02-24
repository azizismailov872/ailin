import {SET_PODCASTS,SET_FETCHING} from './types';
import {getModel,getModels,createModel,deleteModel,updateModel,searchModels} from './../../api/podcastAPI';

const setPodcasts = (podcasts,payload) => ({type:SET_PODCASTS, podcasts,payload});

export const getPodcasts = (pageNumber = 1, pageSize = 10) => async dispatch => {
	try{
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}	
			dispatch(setPodcasts(response.data.data,payload));
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.response);
		}
	}
}

export const searchPodcasts = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		let response = await searchModels(data,pageNumber,pageSize);
		if(response.data)
		{
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setPodcasts(response.data.data,payload));
		}
	}catch(error)
	{	
		if(error.response)
		{
			console.log(error.response);
		}
	}
}

export const deletePodcast = (id) => async dispatch => {
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

export const createPodcast = (data,setProgress) => async dispatch => {
	try{
		let response = await createModel(data,setProgress);
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

export const updatePodcast = (data,id,setProgress) => async dispatch => {
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

export const getPodcast = (id) => async dispatch => {
	try{
		let response = await getModel(id);
		if(response.data.status === 1)
		{
			return response.data.podcast;
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log('error',error.response);
		}
	}
}
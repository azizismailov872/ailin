import {SET_TRAININGS} from './types';
import {getModel,createModel,getModels,searchModels,deleteModel,updateModel,uploadVideo,deleteVideo} from './../../api/trainingAPI';

const setTrainings = (trainings,payload) => ({type: SET_TRAININGS,trainings,payload});

export const getTraining = (id) => async dispatch => {
	try{
		let response = await getModel(id);
		if(response.data.status === 1)
		{
			return response.data.training;
		}
	}
	catch(error)
	{
		console.log(error);
	}
}

export const createTraining = (data,setProgress) => async dispatch => {
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

export const getTrainings = (pageNumber = 1, pageSize = 10) => async dispatch => {
	try{
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}	
			dispatch(setTrainings(response.data.data,payload));
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.response);
		}
	}
}

export const searchTrainings = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		let response = await searchModels(data,pageNumber,pageSize);
		if(response.data)
		{
			let payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setTrainings(response.data.data,payload));
		}
	}catch(error)
	{	
		if(error.response)
		{
			console.log(error.response);
		}
	}
}

export const deleteTraining = (id) => async dispatch => {
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

export const updateTraining = (data,id,setProgress) => async dispatch => {
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

export const uploadTrainingVideos = (data,id,setProgress) => async dispatch => {
	try{
		let response = await uploadVideo(data,id,setProgress);
		if(response.data.status == 1)
		{
			return {
				status: 1
			}
		}
	}catch(error)
	{
		console.log(error)
	}
}

export const deleteTrainingVideos = (id) => async dispatch => {
	try{
		let response = await deleteVideo(id);
		if(response.data.status === 1)
		{
			return {
				status: 1
			}
		}
	}catch(error)
	{
		console.log(error);
	}
}

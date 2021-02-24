import {SET_MODELS} from './types';
import {
	getModel,
	getModels,
	createModel,
	deleteModel,
	updateModel,
	searchModels
} from './../../api/registerApplicationAPI';

export const setModels = (list,payload) => ({type: SET_MODELS,list,payload});


export const getApplicationsList = (pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload = {
                current_page: response.data.current_page,
                per_page: response.data.per_page,
                total: response.data.total,
            };
			dispatch(setModels(response.data.data,payload));
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


export const getApplication = (id) => async dispatch => {
	try{
		let response = await getModel(id);
		if(response.data.status === 1)
		{
			return response.data.model
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.response);
		}
	}
}


export const deleteApplication = (id) => async dispatch => {
	try{
		let response = await deleteModel(id);
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
			console.log(error.response);
		}
	}
}


export const createApplication = (data) => async dispatch => {
	try{
		let response = await createModel(data);
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

export const updateApplication = (data,id) => async dispatch => {
	try{
		let response = await updateModel(data,id);
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


export const searchApplications = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		let response = await searchModels(data,pageNumber,pageSize);
		if(response.data)
		{
			let payload = {
                current_page: response.data.current_page,
                per_page: response.data.per_page,
                total: response.data.total,
            };
			dispatch(setModels(response.data.data,payload));
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.resposne);
		}
	}
}
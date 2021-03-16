import {SET_POSTS} from './types.js';
import {getModels,deleteModel,getModel,createModel,updateModel} from './../../api/postsAPI';

const setPosts = (posts,payload) => ({type:SET_POSTS,posts,payload});

export const getPosts = (pageNumber = 1, pageSize = 10) => async dispatch => {
	try{
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			let payload = {
				current_page: response.data.current_page,
				total: response.data.total,
				per_page: response.data.per_page
			};
			dispatch(setPosts(response.data.data,payload));
		}
	}catch(error)
	{
		if(error.response.data.status === 0)
		{
			console.log(error.response);
		}
	}
}

export const getPost = (id) => async dispatch => {
	try{
		let response = await getModel(id);
		if(response.data.status === 1)
		{
			return response.data.post;
		}
	}catch(error)
	{	
		if(error.response?.data?.status === 0)
		{
			return error.response.data.message;
		}
	}
}

export const deletePost = (id) => async dispatch => {
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
		if(error.response.data.status === 0)
		{
			return {
				status: 0
			}
		}
	}
}


export const createPost = (data) => async dispatch => {
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
				status: 0,
				errors: error.response.data.errors
			}
		}
	}
}

export const updatePost = (data,id) => async dispatch => {
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
		if(error.response.data.status === 0)
		{
			return error.response.data.message;
		}
	}
}
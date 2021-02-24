import {instance} from './api';


export const getModel = (id) => {
	return instance.get(`/register-applications/one/${id}`);
}

export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/register-applications/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const searchModels = (data,pageNumber,pageSize) => {
	return instance.post(`/register-applications/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const createModel = (data) => {
	return instance.post('/register-applications/create',data);
}

export const updateModel = (data,id) => {
	return instance.post(`/register-applications/update/${id}`,data);
}


export const deleteModel = (id) => {
	return instance.get(`/register-applications/delete/${id}`);
}
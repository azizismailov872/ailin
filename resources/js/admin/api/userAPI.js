import {instance} from './api';


export const getModel = (id) => {
	return instance.get(`/users/one/${id}`);
}

export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/users/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const searchModels = (data,pageNumber,pageSize) => {
	return instance.post(`/users/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const deleteModel = (id) => {
	return instance.get(`/users/delete/${id}`);
}

export const createModel = (data) => {
	return instance.post('/users/create',data);
}

export const updateModel = (data,id) => {
	return instance.post(`/users/update/${id}`,data);
}

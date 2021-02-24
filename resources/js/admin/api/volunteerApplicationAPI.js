import {instance} from './api';


export const getModel = (id) => {
	return instance.get(`/volunteer-applications/one/${id}`);
}

export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/volunteer-applications/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const createModel = (data) => {
	return instance.post('/volunteer-applications/create',data);
}

export const searchModels = (data,pageNumber,pageSize) => {
	return instance.post(`/volunteer-applications/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const updateModel = (data,id) => {
	return instance.post(`/volunteer-applications/update/${id}`,data);
}

export const deleteModel = (id) => {
	return instance.get(`/volunteer-applications/delete/${id}`);
}
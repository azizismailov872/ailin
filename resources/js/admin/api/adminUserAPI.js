import { instance } from "./api";


export const getModel = (id) => {
	return instance.get(`/admin-users/one/${id}`);
}

export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/admin-users/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const searchModels = (data,pageNumber,pageSize) => {
	return instance.post(`/admin-users/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}


export const createModel = (data) => {
	return instance.post('/admin-users/create',data);
}

export const updateModel = (data,id) => {
	return instance.post(`/admin-users/update/${id}`,data);
}

export const deleteModel = (id) => {
	return instance.get(`/admin-users/delete/${id}`);
}

export const deletePhoto = (id) => {
	return instance.get(`/admin-users/delete-photo/${id}`);
}
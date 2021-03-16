import { instance } from "./api";

export const getModel = (id) => {
	return instance.get(`/posts/one/${id}`);
}

export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/posts/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const createModel = (data) => {
	return instance.post('/posts/create',data);
}

export const updateModel = (data,id) => {
	return instance.post(`/posts/update/${id}`,data);
}

export const deleteModel = (id) => {
	return instance.get(`/posts/delete/${id}`);
}
import {instance} from './api';

export const searchGenre = (data,pageNumber,pageSize) => {
	return instance.post(`/trainings/genres/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const getGenres = (pageNumber,pageSize) => {
	return instance.get(`/trainings/genres/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const deleteGenre = (id) => {
	return instance.get(`/trainings/genres/delete/${id}`);
}

export const createGenre = (data) => {
	return instance.post('/trainings/genres/create',data);
}

export const updateGenre = (data,id) => {
	return instance.post(`/trainings/genres/update/${id}`,data);
}

export const getGenre = (id) => {
	return instance.get(`/trainings/genres/one/${id}`);
}

export const getList = () => {
	return instance.get('/trainings/genres/genres-list');
}
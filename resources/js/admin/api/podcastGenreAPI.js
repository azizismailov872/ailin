import {instance} from './api';


export const searchGenre = (data,pageNumber,pageSize) => {
	return instance.post(`/podcasts/genres/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const getGenres = (pageNumber,pageSize) => {
	return instance.get(`/podcasts/genres/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const deleteGenre = (id) => {
	return instance.get(`/podcasts/genres/delete/${id}`);
}

export const createGenre = (data) => {
	return instance.post('/podcasts/genres/create',data);
}

export const updateGenre = (data,id) => {
	return instance.post(`/podcasts/genres/update/${id}`,data);
}

export const getGenre = (id) => {
	return instance.get(`/podcasts/genres/one/${id}`);
}

export const getGenresList = () => {
	return instance.get('/podcasts/genres/genres-list');
}
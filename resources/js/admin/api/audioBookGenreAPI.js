import {instance} from './api';


export const searchGenre = (data,pageNumber,pageSize) => {
	return instance.post(`/audiobooks/genres/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const getGenres = (pageNumber,pageSize) => {
	return instance.get(`/audiobooks/genres/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const deleteGenre = (id) => {
	return instance.get(`/audiobooks/genres/delete/${id}`);
}

export const createGenre = (data) => {
	return instance.post('/audiobooks/genres/create',data);
}

export const updateGenre = (data,id) => {
	return instance.post(`/audiobooks/genres/update/${id}`,data);
}

export const getGenre = (id) => {
	return instance.get(`/audiobooks/genres/one/${id}`);
}

export const getGenresList = () => {
	return instance.get('/audiobooks/genres/genres-list');
}
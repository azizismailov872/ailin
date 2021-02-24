import {instance} from './api';


export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/podcasts/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const getModel = (id) => {
	return instance.get(`/podcasts/one/${id}`);
}

export const createModel = (data,setProgress) => {
	return instance.post('/podcasts/create',data,{
		onUploadProgress: progressEvent => {
          setProgress(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
	});
}

export const deleteModel = (id) => {
	return instance.get(`/podcasts/delete/${id}`);
}

export const updateModel = (data,id,setProgress) => {
	return instance.post(`/podcasts/update/${id}`,data,{
		onUploadProgress: progressEvent => {
          setProgress(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
	});
} 

export const searchModels = (data,pageNumber,pageSize) => {
	return instance.post(`/podcasts/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}
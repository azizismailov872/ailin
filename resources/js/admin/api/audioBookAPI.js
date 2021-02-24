import {instance} from './api';


export const getModels = (pageNumber,pageSize) => {
	return instance.get(`/audiobooks/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const getModel = (id) => {
	return instance.get(`/audiobooks/one/${id}`);
}

export const createModel = (data,setProgress) => {
	return instance.post('/audiobooks/create',data,{
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
	return instance.get(`/audiobooks/delete/${id}`);
}

export const updateModel = (data,id,setProgress) => {
	return instance.post(`/audiobooks/update/${id}`,data,{
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
	return instance.post(`/audiobooks/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}
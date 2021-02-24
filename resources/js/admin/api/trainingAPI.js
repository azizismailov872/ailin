import {instance} from './api';


export const getModel = (id) => {
	return instance.get(`/trainings/one/${id}`);
}

export const createModel = (data,setProgress) => {
	return instance.post('/trainings/create',data,{
		onUploadProgress: progressEvent => {
          setProgress(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
	});
}

export const getModels = (pageNumber,pageSize) => {
  return instance.get(`/trainings/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const searchModels = (data,pageNumber,pageSize) => {
  return instance.post(`/trainings/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const deleteModel = (id) => {
  return instance.get(`/trainings/delete/${id}`);
}

export const updateModel = (data,id,setProgress) => {
  return instance.post(`/trainings/update/${id}`,data,{
    onUploadProgress: progressEvent => {
          setProgress(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
  });
}


export const uploadVideo = (data,id,setProgress) => {
    return instance.post(`/trainings/upload-video/${id}`,data,{
        onUploadProgress: progressEvent => {
          setProgress(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
    });
}

export const deleteVideo = (id) => {
  return instance.get(`/trainings/delete-video/${id}`);
}
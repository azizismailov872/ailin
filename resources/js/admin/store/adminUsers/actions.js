import {SET_USERS} from './types';
import {
    getModel,
    getModels,
    createModel,
    updateModel,
    deleteModel,
    searchModels,
    deletePhoto
} from "./../../api/adminUserAPI";

const setUsers = (users,payload) => ({type: SET_USERS,users,payload});


export const getUsersList = (pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		let response = await getModels(pageNumber,pageSize);
		if(response.data.data)
		{	
			const payload = {
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			};
			dispatch(setUsers(response.data.data,payload));
		}
	}catch(error)
	{
		if(error.response)
		{
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const getUser = (id) => async dispatch => {
    try{
        let response = await getModel(id);
        if(response.data.status === 1){
            return response.data.user;
        }
    }catch(error)
    {
        if(error.response)
        {
            return {
                errors: error.response.data.errors
            }
        }
    }
}

export const searchUsers = (data, pageNumber = 1, pageSize = 10) => async (dispatch) => {
    try {
        let response = await searchModels(data, pageNumber, pageSize);
        if (response.data) {
            let payload = {
                current_page: response.data.current_page,
                per_page: response.data.per_page,
                total: response.data.total,
            };
            dispatch(setUsers(response.data.data, payload));
        }
    } catch (error) {
        if (error.response) {
            return {
                errors: error.response.data.errors,
            };
        }
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        let response = await deleteModel(id);
        if (response.data.status === 1) {
            return {
                status: 1,
            };
        }
    } catch (error) {
        if (error.response) {
            return {
                status: 0,
            };
        }
    }
};

export const deleteUserPhoto = (id) => async (dispatch) => {
    try {
        let response = await deletePhoto(id);
        if (response.data.status === 1) {
            return {
                status: 1,
            };
        }
    } catch (error) {
        if (error.response) {
            return {
                status: 0,
            };
        }
    }
};

export const createUser = (data) => async (dispatch) => {
    try {
        let response = await createModel(data);
        if (response.data.status === 1) {
            return {
                status: 1,
            };
        }
    } catch (error) {
        if (error.response) {
            return {
                errors: error.response.data.errors,
            };
        }
    }
};

export const updateUser = (data,id) => async dispatch => {
    try{
        let response = await updateModel(data,id);
        if(response.data.status === 1)
        {
            return {
                status: 1
            }
        }
    }catch(error)
    {
        if(error.response)
        {
            return {
                errors: error.response.data.errors
            }
        }
    }
}
import {instance} from './api';

export const auth = () => {
	return instance.get('/auth');
}

export const login = (data) => {
	return instance.post('/login',data);
}

export const logout = () => {
	return instance.get('/logout');
}
import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {loginUser} from './../../store/auth/actions';
import {schema} from './../../validation/auth/login';
import {setErrors} from './../../helper';

import Login from './Login';
import Spinner from './../../components/Spinner/Spinner';


const LoginContainer = () => {

	useEffect(() => {
		document.title = 'Вход';
	},[]);	

	const dispatch = useDispatch();

	const [isFetching,setFetching] = useState(false);

	const {register,handleSubmit,errors,setError} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const onSubmit = async(data) => {
		setFetching(true);
		let response = await dispatch(loginUser(data));
		setFetching(false);
		if(response)
		{
			setErrors(response,setError);
		}
	}

	return(
		<>
		{
			isFetching ? <Spinner /> : null
		}
		<Login 
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
		/>
		</>
	)
}

export default LoginContainer;
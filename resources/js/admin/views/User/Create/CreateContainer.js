import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {createUser} from './../../../store/users/actions';
import {schema} from './../../../validation/user/create';
import {getFormValues,setErrors} from './../../../helper';

import Create from './../../../components/User/Create/Create';


const CreateContainer = () => {

	useEffect(() => {
		document.title = 'Создать пользователя';
	},[]);

	const dispatch = useDispatch();

	const history = useHistory();

	const [isFetching,setFetching] = useState(false);

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,handleSubmit,errors,setError,reset} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onReset = () => {
		reset();
	}

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = getFormValues(data);
		let response = await dispatch(createUser(formData));
		if(response?.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/users/list');
			},2000);
		}
		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
	}


	return (
        <Create
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            onReset={onReset}
            isFetching={isFetching}
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            successMessage="Пользователь добавлен"
			title="Создать пользователя"
        />
    );
}

export default CreateContainer;
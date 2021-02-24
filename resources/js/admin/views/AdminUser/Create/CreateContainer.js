import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from './../../../validation/adminUser/create';
import {createUser} from './../../../store/adminUsers/actions';
import {getFormValues,setErrors} from './../../../helper';

import Create from './../../../components/AdminUser/Create/Create';

const CreateContainer = () => {

	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		document.title = 'Создать администратора';
	},[]);

	const {register,control,handleSubmit,errors,setError,reset} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const [isFetching,setFetching] = useState(false);

	const [dialogOpen,setDialogOpen] = useState(false);

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = getFormValues(data);
		let response = await dispatch(createUser(formData));
		setFetching(false);
		if(response.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/admin-users/list');
			},2000);
		}

		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
	}

	const onReset = () => {
		reset();
	}

	return (
		<Create 
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
			control={control}
			onReset={onReset}
			//
			isFetching={isFetching}
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			successMessage="Администратор успешно создан"
		/>
	)

}

export default CreateContainer;
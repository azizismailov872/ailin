import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {schema} from './../../../validation/post/create';
import {getFormValues,setErrors} from './../../../helper';
import {createPost} from './../../../store/posts/actions';

import Create from './../../../components/Post/Create/Create';

const CreateContainer = () => {

	const dispatch = useDispatch();

	const history = useHistory();

	const {register,handleSubmit,errors,setError,reset} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const [dialogOpen,setDialogOpen] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = getFormValues(data);
		let response = await dispatch(createPost(formData));
		setFetching(false);
		if(response.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/posts/list');
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

	return(
		<Create 
			title="Создать пост"
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			onReset={onReset}
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			isFetching={isFetching}
			errors={errors}
			successMessage="Пост создан"
		/>
	)
}

export default CreateContainer;
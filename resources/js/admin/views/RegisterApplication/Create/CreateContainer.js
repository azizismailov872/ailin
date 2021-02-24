import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {createApplication} from './../../../store/registerApplications/actions';
import {schema} from './../../../validation/registerApps/create';
import {getApplicationFormValues,setErrors} from './../../../helper';

import Create from './../../../components/Applications/Create/Create';

const CreateContainer = () => {

	useEffect(() => {
		document.title = 'Создать заявку';
	},[]);

	const dispatch = useDispatch();

	const history = useHistory();

	const [dialogOpen,setDialogOpen] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const {register,control,handleSubmit,errors,setError,reset} = useForm({
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
		let formData = getApplicationFormValues(data);
		let response = await dispatch(createApplication(formData));
		setFetching(false);
		if(response?.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/register-applications/list');
			},2000);
		}

		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
	}



	return(
		<Create 
			register={register}
			control={control}
			errors={errors}
			onSubmit={handleSubmit(onSubmit)}
			//
			title="Создать заявку на регистрацию"
			successMessage="Заявка успешно создана"
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			isFetching={isFetching}
			onReset={onReset}
		/>
	)
}

export default CreateContainer;
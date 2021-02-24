import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from './../../../validation/registerApps/update';
import {getApplicationFormValues,setErrors} from './../../../helper';
import {getApplication,updateApplication} from './../../../store/volunteerApplications/actions';

import Update from './../../../components/Applications/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';

const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [model,setModel] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const getModel = async(id) => {	
		let response = await dispatch(getApplication(id));
		if(response)
		{
			setModel(response);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Обновить заявку';
		if(id)
		{
			getModel(id);		
		}
	},[]);

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
		let response = await dispatch(updateApplication(formData,model.id));
		setFetching(false);
		if(response?.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/volunteer-applications/list');
			},2000);
		}

		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
	}



	return(
		!isLoaded ? <Spinner /> : (
			<Update
				register={register}
				control={control}
				errors={errors}
				onSubmit={handleSubmit(onSubmit)}
				//
				title="Обновить заявку"
				successMessage="Заявка успешно обновлена"
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				isFetching={isFetching}
				onReset={onReset}
				model={model}
			/>
		)
	)
}

export default UpdateContainer;
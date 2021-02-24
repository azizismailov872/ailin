import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {updateUser,getUser} from './../../../store/adminUsers/actions';
import {getFormValues,setErrors} from './../../../helper';
import {schema} from './../../../validation/adminUser/update';

import Update from './../../../components/AdminUser/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';

const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [user,setUser] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const getUserModel = async(id) => {
		let userModel = await dispatch(getUser(id));
		if(userModel)
		{
			setUser(userModel);
			setLoaded(true);
		}
	}

	useEffect(() => {
		const id = props.match.params.id;
		document.title = 'Обновить администратора';
		getUserModel(id);
	},[]);

	const {register,control,handleSubmit,errors,setError} = useForm({
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
		let response = await dispatch(updateUser(formData,user.id));
		setFetching(false);
		if(response.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/admin-users/list');
			},2000);
		}

		if(response?.errors){
			setErrors(response.errors,setError);
		}
	}


	return (
		!isLoaded ? <Spinner /> : (
			<Update 
				register={register}
				control={control}
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				//
				model={user}
				title={'Обновить ' + user.name}
				isFetching={isFetching}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				successMessage="Пользователь обнолвен"
			/>
		)
	)
}


export default UpdateContainer;
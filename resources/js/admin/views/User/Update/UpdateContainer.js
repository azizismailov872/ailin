import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { getUser, updateUser } from "../../../store/users/actions";
import { schema } from '../../../validation/user/update';
import { getFormValues, setErrors } from '../../../helper';
import { useHistory } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import Update from '../../../components/User/Update/Update';


const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [user,setUser] = useState(false);

	const [isLoaded,setLoaded] = useState(false);

	const getUserModel = async(id) => {
		if(id)
		{
			let userModel = await dispatch(getUser(id));
			if(userModel)
			{
				setUser(userModel);
				setLoaded(true);
			}
		}
	}

	useEffect(() => {
		const id = props.match.params.id;
		document.title = 'Обновить пользователя';
		getUserModel(id);
	},[]);

	const {register,handleSubmit,errors,setError} = useForm({
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
		let response = await dispatch(updateUser(data,user.id));
		setFetching(false);
		if(response?.status == 1)
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



	return !isLoaded ? (
        <Spinner />
    ) : (
        <Update
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            model={user}
            isFetching={isFetching}
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            title={"Обновить " + user.name}
			successMessage="Пользователь обновлен"
        />
    );
}

export default UpdateContainer;
import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {getFormValues,setErrors} from './../../../helper';
import {schema} from './../../../validation/post/update';
import {getPost,updatePost} from './../../../store/posts/actions';

import Update from './../../../components/Post/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';

const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [post,setPost] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const initialize = async(id) => {
		let postModel = await dispatch(getPost(id));
		if(postModel && postModel !== null)
		{
			setPost(postModel);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		if(id && id !== null)
		{
			initialize(id);
		}
	},[]);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const {register,handleSubmit,errors,setError} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema),
	});

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = getFormValues(data);
		if(formData && formData !== null)
		{
			let response = await dispatch(updatePost(formData,post.id));
			setFetching(false);
			if(response?.status === 1)
			{
				setDialogOpen(true);
				setTimeout(() => {
					closeDialog();
					history.push('/admin/posts/list');
				},2000);
			}
		}
		setFetching(false);
	}

	return(
		!isLoaded ? <Spinner /> : <Update 
			title="Обновить пост"
			successMessage="Пост обновлен"
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			isFetching={isFetching}
			//
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
			model={post}

		/>
	)
}


export default UpdateContainer;
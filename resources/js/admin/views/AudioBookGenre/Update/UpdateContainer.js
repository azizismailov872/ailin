import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {getFormValues,setErrors} from './../../../helper';
import {schema} from './../../../validation/audiobook/genre/update';
import {updateAudioBookGenre,getAudioBookGenre} from './../../../store/audiobooks/genres/actions';

import UpdateGenre from './../../../components/Genres/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';

const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [genre,setGenre] = useState(null);

	const getGenre = async(id) => {
		let response = await dispatch(getAudioBookGenre(id));
		if(!response.errors){
			setGenre(response);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Аудиокниги | Обновить жанр';
		if(id)
		{
			getGenre(id);		
		}
	},[]);

	const {register,handleSubmit,control,errors,setError} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const [dialogOpen,setDialogOpen] = useState(false);

	const isFetching = useSelector(state => state.audiobookGenres.isFetching);

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		let formData = getFormValues(data);
		let response = await dispatch(updateAudioBookGenre(formData,genre.id));
		if(response?.errors)
		{
			setErrors(response.errors,setError);
		} 
		else
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/audiobooks/genres/list');
			},2000);
		}
	}


	return(
		!genre ? <Spinner /> : (
			<UpdateGenre 
				genre={genre}
				register={register}
				control={control}
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				//
				isFetching={isFetching}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				title="Обновить жанр"
			/>
		)
	)
}

export default UpdateContainer;
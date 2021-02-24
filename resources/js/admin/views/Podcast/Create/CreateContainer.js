import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from './../../../validation/podcast/create';
import {getPodcastGenresList} from './../../../store/podcasts/genres/actions';
import {createPodcast} from './../../../store/podcasts/actions';
import {getFormValuesWithFiles,setErrors} from './../../../helper';

import Create from './../../../components/Content/Create/Create';
import Spinner from './../../../components/Spinner/Spinner';


const CreateContainer = () => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [genres,setGenres] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const getGenres = async() => {
		let genresList = await dispatch(getPodcastGenresList());
		setGenres(genresList);
		setLoaded(true);
	}

	useEffect(() => {
		getGenres();
		document.title = 'Создать подкаст';
	},[]);

	const [isFetching,setFetching] = useState(false);

	const [progress,setProgress] = useState(0);

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,control,handleSubmit,errors,setError,reset,watch} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const uploadFile = watch('uploadFile',false);

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = await getFormValuesWithFiles(data);
		let response = await dispatch(createPodcast(formData, setProgress));
		setFetching(false);
        if (response?.errors) {
            setErrors(response.errors, setError);
        }
        else 
		{
			setDialogOpen(true);
			setTimeout(() => {
				setProgress(0);
				closeDialog();
				history.push('/admin/podcasts/list');
			},2000);
		}
    }

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onReset = () => {	
		reset();
	}

	return (
		!isLoaded ? <Spinner /> : (
			<Create 
				//form
				register={register}
				control={control}
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				onReset={onReset}
				//data
				genres={genres}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				isFetching={isFetching}
				progress={progress}
				//
				successMessage="Подкаст успешно загружен"
				title="Подкаст"
				uploadFile={uploadFile}
			/>
		)
	)
}

export default CreateContainer;
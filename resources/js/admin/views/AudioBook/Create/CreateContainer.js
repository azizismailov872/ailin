import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from './../../../validation/audiobook/create';
import {getAudioBookGenresList} from './../../../store/audiobooks/genres/actions';
import {createAudioBook} from './../../../store/audiobooks/actions';
import {getFormValuesWithFiles,setErrors} from './../../../helper';

import Create from './../../../components/Content/Create/Create';
import Spinner from './../../../components/Spinner/Spinner';


const CreateContainer = () => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [genres,setGenres] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const getGenres = async() => {
		let genresList = await dispatch(getAudioBookGenresList());
		setGenres(genresList);
		setLoaded(true);
	}

	useEffect(() => {
		getGenres();
		document.title = 'Создать аудиокнигу';
	},[]);

	const isFetching = useSelector(state => state.audiobooks.isFetching);

	const [progress,setProgress] = useState(0);

	const [dialogOpen,setDialogOpen] = useState(false);


	const {register,control,handleSubmit,errors,setError,reset,watch} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const uploadFile = watch('uploadFile',false);

	const onSubmit = async(data) => {
		let formData = await getFormValuesWithFiles(data);
		let response = await dispatch(createAudioBook(formData, setProgress));
        if (response?.errors) {
            setErrors(response.errors, setError);
        }
        else 
		{
			setDialogOpen(true);
			setTimeout(() => {
				setProgress(0);
				closeDialog();
				history.push('/admin/audiobooks/list');
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
				successMessage="Книга успешно загружена"
				title="Аудиокниги"
				uploadFile={uploadFile}
			/>
		)
	)
}

export default CreateContainer;
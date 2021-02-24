import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {updateTraining,getTraining} from './../../../store/trainings/actions';

import {schema} from './../../../validation/training/update';
import {getGenresList} from './../../../store/trainings/genres/actions';
import {getFormValuesWithFiles,setErrors} from './../../../helper';

import Update from './../../../components/Content/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';


const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [training,setTraining] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const [genres,setGenres] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [hasFile,setHasFile] = useState(0);

	const [progress,setProgress] = useState(0);

	const getTrainingModel = async(id) => {
		let trainingModel = await dispatch(getTraining(id));
		let genres = await dispatch(getGenresList());
		if(trainingModel)
		{
			setTraining(trainingModel);
			setHasFile((trainingModel.hasFile === true) ? 1 : 0);
			setGenres(genres);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Обновить тренинг';
		if(id)
		{
			getTrainingModel(id);
		}
	},[]);

	const {register,handleSubmit,control,errors,setError,watch} = useForm({
		mode: 'onSubmit'
	});

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		setFetching(true);
		let formData =  await getFormValuesWithFiles(data);
		let response = await dispatch(updateTraining(formData,training.id,setProgress));
		setFetching(false);
		setProgress(0);
		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
		else
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/trainings/list');
			},2000);
		}
	}

	const uploadFile = watch('uploadFile',hasFile);

	return(
		!isLoaded ? <Spinner /> : (
			<Update
				//
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				errors={errors}
				//
				isFetching={isFetching}
				model={training}
				genres={genres}
				uploadFile={uploadFile}
				successMessage="Тренинг успешно обновлен"
				title={'Обновить ' + training.title}
				progress={progress}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
			/>
		)
	)
}

export default React.memo(UpdateContainer);
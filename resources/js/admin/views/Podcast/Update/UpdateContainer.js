import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {updatePodcast,getPodcast} from './../../../store/podcasts/actions';

import {schema} from './../../../validation/podcast/update';
import {getPodcastGenresList} from './../../../store/podcasts/genres/actions';
import {getFormValuesWithFiles,setErrors} from './../../../helper';

import Update from './../../../components/Content/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';


const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [podcast,setPodcast] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const [genres,setGenres] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [hasFile,setHasFile] = useState(0);

	const [progress,setProgress] = useState(0);

	const getPodcastModel = async(id) => {
		let podcastModel = await dispatch(getPodcast(id));
		let genres = await dispatch(getPodcastGenresList());
		if(podcastModel)
		{
			setPodcast(podcastModel);
			setHasFile((podcastModel.hasFile === true) ? 1 : 0);
			setGenres(genres);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Обновить подкаст';
		if(id)
		{
			getPodcastModel(id);
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
		let response = await dispatch(updatePodcast(formData,podcast.id,setProgress));
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
				history.push('/admin/podcasts/list');
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
				model={podcast}
				genres={genres}
				uploadFile={uploadFile}
				successMessage="Подкаст успешно обновлен"
				title={'Обновить ' + podcast.title}
				progress={progress}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
			/>
		)
	)
}

export default React.memo(UpdateContainer);
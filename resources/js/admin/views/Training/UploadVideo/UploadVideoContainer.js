import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {getTraining,uploadTrainingVideos} from './../../../store/trainings/actions';
import {getFormVideos} from './../../../helper';


import UploadVideo from './../../../components/Content/UploadVideo/UploadVideo';
import Spinner from './../../../components/Spinner/Spinner';

const UploadVideoContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [training,setTraining] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const [hasVideo,setHasVideo] = useState(0);

	const getTrainingModel = async(id) => 
	{
		let trainingModel = await dispatch(getTraining(id));
		if(trainingModel)
		{
			setTraining(trainingModel);
			setHasVideo((trainingModel.hasVideo === true) ? 1 : 0);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Загрузить видео';
		if(id)
		{
			getTrainingModel(id);
		}
	},[]);

	const [progress,setProgress] = useState(0);

	const [isFetching,setFetching] = useState(false);

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,handleSubmit,control,errors,setError,watch} = useForm({
		mode: 'onSubmit'
	});

	const uploadVideo = watch('uploadVideo',hasVideo);

	const onSubmit = async(data) => {
		setFetching(true);
		let formData = await getFormVideos(data);
		let response = await dispatch(uploadTrainingVideos(formData,training.id,setProgress));
		setFetching(false);
		if(response.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/trainings/list');
			},2000);
		}
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	return(
		!isLoaded ? <Spinner /> : (
			<UploadVideo 
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				control={control}
				//
				uploadVideo={uploadVideo}
				closeDialog={closeDialog}
				dialogOpen={dialogOpen}
				isFetching={isFetching}
				progress={progress}
				title="Загрузить видео"
				successMessage="Видео загружено"
				model={training}
			/>
		)
	)
}


export default UploadVideoContainer;
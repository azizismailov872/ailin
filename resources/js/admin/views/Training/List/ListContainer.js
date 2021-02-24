import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getTrainings,searchTrainings,deleteTraining,deleteTrainingVideos} from './../../../store/trainings/actions';
import {getFormValues} from './../../../helper';

import List from './../../../components/Content/List/List';
import Spinner from './../../../components/Spinner/Spinner';


const ListContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrainings());
		document.title = 'Тренинги';
	},[]);

	const {isLoaded,per_page,current_page,total,trainings} = useSelector(state => ({
		isLoaded: state.trainings.isLoaded,
		trainings: state.trainings.trainings,
		current_page: state.trainings.current_page,
		per_page: state.trainings.per_page,
		total: state.trainings.total 
	}));

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const [deleteVideo,setDeleteVideo] = useState(false);

	const {register,handleSubmit,control,reset} = useForm({
		mode: 'onSubmit'
	});

	const onSubmit = async(data) => {
		setFetching(true);
		setSearch(true);
		let formData = getFormValues(data);
		setSearchData(formData);
		await dispatch(searchTrainings(formData));
		setFetching(false);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getTrainings(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchTrainings(searchData,pageNumber));
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onDelete = async(id) => {
		if(id)
		{
			let response = await dispatch(deleteTraining(id));
			if(response.status === 1)
			{
				setDialogOpen(true);
				dispatch(getTrainings());
				setTimeout(() => closeDialog(),2000);
			}
		}
	}

	const deleteVideoAction = async(id) => {
		let response = await dispatch(deleteTrainingVideos(id));
		if(response.status === 1){
			setDeleteVideo(true);
			setTimeout(() => setDeleteVideo(false),2000);
		}
	}

	const onReset = () => {
		reset();
		dispatch(getTrainings());
	}

	return(
		!isLoaded ? <Spinner /> : (
			<List
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				//
				onPageChange={isSearch ? onPageSearch : onPageChange}
				models={trainings}
				total={total}
				current_page={current_page}
				per_page={per_page}
				isFetching={isFetching}
				//
				onReset={onReset}
				onDelete={onDelete}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				createLink="/admin/trainings/create"
				updateLink="/admin/trainings/update/"
				title="Тренинги"
				successMessage="Тренинг удален"
				canUpdateVideo={true}
				deleteVideo={deleteVideo}
				deleteVideoAction={deleteVideoAction}
			/>
		)
	)
}

export default ListContainer;
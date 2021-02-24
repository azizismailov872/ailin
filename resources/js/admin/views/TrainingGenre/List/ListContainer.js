import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getTrainingGenres,searchTrainingGenres,deleteTrainingGenre} from './../../../store/trainings/genres/actions';

import {getFormValues} from './../../../helper';

import List from './../../../components/Genres/List/List';
import Spinner from './../../../components/Spinner/Spinner';

const ListContainer = (props) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrainingGenres());
		document.title = 'Тренинги | Жанры';
	},[]);

	const {isFetching,isLoaded,genres,current_page,total,per_page} = useSelector(state => ({
		isFetching: state.trainingGenres.isFetching,
		isLoaded: state.trainingGenres.isLoaded,
		genres: state.trainingGenres.genres,
		current_page: state.trainingGenres.current_page,
		total: state.trainingGenres.total,
		per_page: state.trainingGenres.per_page
	}));

	const {register,handleSubmit,control,errors,reset} = useForm({
		mode: 'onSubmit'
	});

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const onSubmit = (data) => {
		setSearch(true);
		let formData = getFormValues(data);
		dispatch(searchTrainingGenres(formData));
		setSearchData(formData);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getTrainingGenres(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchTrainingGenres(searchData,pageNumber));
	}

	const onReset = () => {
		reset();
		setSearchData(null);
		setSearch(false);
		dispatch(getTrainingGenres());
	}

	const onDelete = async(id) => {
		let response = await dispatch(deleteTrainingGenre(id));
		if(response)
		{	
			setDialogOpen(true);
			dispatch(getTrainingGenres());
			setTimeout(() => {
				closeDialog();
			},2000);
			
		}
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	return(
		!isLoaded ? <Spinner /> : (
			<List 
				register={register}
				control={control}
				errors={errors}
				onSubmit={handleSubmit(onSubmit)}
				onReset={onReset}
				title={'Тренинги | Жанры'}
				//
				genres={genres}
				total={total}
				per_page={per_page}
				current_page={current_page}
				onPageChange={isSearch ? onPageSearch : onPageChange}
				//
				isFetching={isFetching}
				onDelete={onDelete}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				//
				createLink="/admin/trainings/genres/create"
				updateLink="/admin/trainings/genres/update/"
			/>
		) 
	)
}

export default ListContainer;
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getPodcastGenres,searchPodcastGenres,deletePodcastGenre} from './../../../store/podcasts/genres/actions';

import {getFormValues} from './../../../helper';

import List from './../../../components/Genres/List/List';
import Spinner from './../../../components/Spinner/Spinner';

const ListContainer = (props) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPodcastGenres());
		document.title = 'Подкасты | Жанры';
	},[]);

	const {isFetching,isLoaded,genres,current_page,total,per_page} = useSelector(state => ({
		isFetching: state.podcastGenres.isFetching,
		isLoaded: state.podcastGenres.isLoaded,
		genres: state.podcastGenres.genres,
		current_page: state.podcastGenres.current_page,
		total: state.podcastGenres.total,
		per_page: state.podcastGenres.per_page
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
		dispatch(searchPodcastGenres(formData));
		setSearchData(formData);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getPodcastGenres(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchPodcastGenres(searchData,pageNumber));
	}

	const onReset = () => {
		reset();
		setSearchData(null);
		setSearch(false);
		dispatch(getPodcastGenres());
	}

	const onDelete = async(id) => {
		let response = await dispatch(deletePodcastGenre(id));
		if(response)
		{	
			setDialogOpen(true);
			dispatch(getPodcastGenres());
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
				title={'Подкасты | Жанры'}
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
				createLink="/admin/podcasts/genres/create"
				updateLink="/admin/podcasts/genres/update/"
			/>
		) 
	)
}

export default ListContainer;
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getAudioBookGenres,searchAudioBookGenres,deleteAudioBookGenre} from './../../../store/audiobooks/genres/actions';

import {getFormValues} from './../../../helper';

import List from './../../../components/Genres/List/List';
import Spinner from './../../../components/Spinner/Spinner';

const ListContainer = (props) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAudioBookGenres());
		document.title = 'Аудиокниги | Жанры';
	},[]);

	const {isFetching,isLoaded,genres,current_page,total,per_page} = useSelector(state => ({
		isFetching: state.audiobookGenres.isFetching,
		isLoaded: state.audiobookGenres.isLoaded,
		genres: state.audiobookGenres.genres,
		current_page: state.audiobookGenres.current_page,
		total: state.audiobookGenres.total,
		per_page: state.audiobookGenres.per_page
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
		dispatch(searchAudioBookGenres(formData));
		setSearchData(formData);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getAudioBookGenres(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchAudioBookGenres(searchData,pageNumber));
	}

	const onReset = () => {
		reset();
		setSearchData(null);
		setSearch(false);
		dispatch(getAudioBookGenres());
	}

	const onDelete = async(id) => {
		let response = await dispatch(deleteAudioBookGenre(id));
		if(response)
		{	
			setDialogOpen(true);
			dispatch(getAudioBookGenres());
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
				title={'Аудиокниги | Жанры'}
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
				createLink="/admin/audiobooks/genres/create"
				updateLink="/admin/audiobooks/genres/update/"
			/>
		) 
	)
}

export default ListContainer;
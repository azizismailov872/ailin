import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getAudioBooks,searchAudioBooks,deleteAudioBook} from './../../../store/audiobooks/actions';
import {getFormValues} from './../../../helper';


import List from './../../../components/Content/List/List';
import Spinner from './../../../components/Spinner/Spinner';

const ListContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAudioBooks());
		document.title = "Аудиокниги";
	},[]);

	const {isLoaded,isFetching,books,current_page,per_page,total} = useSelector(state => ({
		isLoaded: state.audiobooks.isLoaded,
		isFetching: state.audiobooks.isFetching,
		books: state.audiobooks.books,
		current_page: state.audiobooks.current_page,
		per_page: state.audiobooks.per_page,
		total: state.audiobooks.total
	}));

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,handleSubmit,control,errors,setError,reset} = useForm({
		mode: 'onSubmit'
	});

	const onSubmit = (data) => {
		setSearch(true);
		let formData = getFormValues(data);
		setSearchData(formData);
		dispatch(searchAudioBooks(formData));
	}

	const onPageChange = (pageNumber) => {
		dispatch(getAudioBooks(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchAudioBooks(searchData,pageNumber));
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onDelete = async(id) => {
		if(id)
		{
			let response = await dispatch(deleteAudioBook(id));
			if(response.status === 1)
			{
				setDialogOpen(true);
				dispatch(getAudioBooks());
				setTimeout(() => closeDialog(),2000);
			}
		}
	}

	const onReset = () => {
		reset();
		setSearch(false);
		dispatch(getAudioBooks());
	}


	return(
		!isLoaded ? <Spinner /> : (
			<List
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				control={control}
				//
				onPageChange={isSearch ? onPageSearch : onPageChange}
				models={books}
				total={total}
				current_page={current_page}
				per_page={per_page}
				isFetching={isFetching}
				//
				onReset={onReset}
				onDelete={onDelete}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				createLink="/admin/audiobooks/create"
				updateLink="/admin/audiobooks/update/"
				title="Аудиокниги"
				successMessage="Аудиокнига удалена"
			/>
		)
	)
}

export default ListContainer;
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getPodcasts,searchPodcasts,deletePodcast} from './../../../store/podcasts/actions';
import {getFormValues} from './../../../helper';

import List from './../../../components/Content/List/List';
import Spinner from './../../../components/Spinner/Spinner';


const ListContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPodcasts());
		document.title = 'Подкасты';
	},[]);

	const {isLoaded,per_page,current_page,total,podcasts} = useSelector(state => ({
		isLoaded: state.podcasts.isLoaded,
		podcasts: state.podcasts.podcasts,
		current_page: state.podcasts.current_page,
		per_page: state.podcasts.per_page,
		total: state.podcasts.total 
	}));

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const {register,handleSubmit,control,reset} = useForm({
		mode: 'onSubmit'
	});

	const onSubmit = async(data) => {
		setFetching(true);
		setSearch(true);
		let formData = getFormValues(data);
		setSearchData(formData);
		await dispatch(searchPodcasts(formData));
		setFetching(false);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getPodcasts(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchPodcasts(searchData,pageNumber));
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onDelete = async(id) => {
		if(id)
		{
			let response = await dispatch(deletePodcast(id));
			if(response.status === 1)
			{
				setDialogOpen(true);
				dispatch(getPodcasts());
				setTimeout(() => closeDialog(),2000);
			}
		}
	}

	const onReset = () => {
		reset();
		dispatch(getPodcasts());
	}

	return(
		!isLoaded ? <Spinner /> : (
			<List
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				//
				onPageChange={isSearch ? onPageSearch : onPageChange}
				models={podcasts}
				total={total}
				current_page={current_page}
				per_page={per_page}
				isFetching={isFetching}
				//
				onReset={onReset}
				onDelete={onDelete}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				createLink="/admin/podcasts/create"
				updateLink="/admin/podcasts/update/"
				title="Подкасты"
				successMessage="Подкаст удален"
			/>
		)
	)
}

export default ListContainer;
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {getApplicationsList,searchApplications,deleteApplication} from './../../../store/registerApplications/actions';
import {getApplicationFormValues} from './../../../helper';

import List from './../../../components/Applications/List/List';
import Spinner from './../../../components/Spinner/Spinner';

const ListContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationsList());
		document.title = 'Заявки на регистрацию';
	},[]);

	const {isLoaded,list,total,per_page,current_page} = useSelector(state => ({
		isLoaded: state.registerApps.isLoaded,
		list: state.registerApps.list,
		total: state.registerApps.total,
		current_page: state.registerApps.current_page,
		per_page: state.registerApps.per_page,
	}));

	const {register,control,handleSubmit,reset} = useForm({
		mode: 'onSubmit'
	});

	const [isFetching,setFetching] = useState(false);

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const onReset = () => {
		reset();
		dispatch(getApplicationsList());
		setSearch(false);
		setSearchData(null);
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		setFetching(true);
		setSearch(true);
		let formData = getApplicationFormValues(data);
		setSearchData(formData);
		await dispatch(searchApplications(formData));
		setFetching(false);
	}

	const onPageChange = (pageNumber) => {
		dispatch(getApplicationsList(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchApplications(searchData,pageNumber));
	}

	const onDelete = async(id) => {
		setFetching(true);
		let response = await dispatch(deleteApplication(id));
		await dispatch(getApplicationsList());
		setFetching(false);
		if(response?.status === 1)
		{
			setDialogOpen(true);
			setTimeout(() => closeDialog(),2000);
		}
	}


	return(
		!isLoaded ? <Spinner /> : (
			<List 
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				onReset={onReset}
				onDelete={onDelete}
				//
				onPageChange={isSearch ? onPageSearch : onPageChange}
				isFetching={isFetching}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				//
				title="Заявки на регистрацию"
				successMessage="Заявка удалена"
				createLink="/admin/register-applications/create"
				updateLink="/admin/register-applications/update/"
				//
				models={list}
				per_page={per_page}
				current_page={current_page}
				total={total}
			/>
		)
	)
}

export default ListContainer;
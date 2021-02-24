import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
    searchUsers,
    getUsersList,
    deleteUser,
} from "./../../../store/users/actions";
import {getFormValues} from './../../../helper';

import List from './../../../components/User/List/List';
import Spinner from '../../../components/Spinner/Spinner';

const ListContainer = () => {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersList());
		document.title = 'Пользователи';
	},[]);

	const {users,total,per_page,current_page,isLoaded} = useSelector(state => ({
		users: state.users.users,
		total: state.users.total,
		current_page: state.users.current_page,
		per_page: state.users.per_page,
		isLoaded: state.users.isLoaded
	}));

	const [isFetching,setFetching] = useState(false);

	const [isSearch,setSearch] = useState(false);

	const [searchData,setSearchData] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,handleSubmit,reset} = useForm({
		mode: 'onSubmit'
	});

	const onSubmit = async(data) => {
		setFetching(true);
		setSearch(true);
		let formData = getFormValues(data);
		setSearchData(formData);
		await dispatch(searchUsers(formData));
		setFetching(false);
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onDelete = async(id) => {
		setFetching(true);
		let response = await dispatch(deleteUser(id));
		setFetching(false);
		if(response.status === 1)
		{	
			setDialogOpen(true);
			setTimeout(() => {
				dispatch(getUsersList());
				closeDialog();
			},2000);
		}
	}

	const onPageChange = (pageNumber) => {
		dispatch(getUsersList(pageNumber));
	}

	const onPageSearch = (pageNumber) => {
		dispatch(searchUsers(searchData,pageNumber));
	}

	const onReset = () => {
		dispatch(getUsersList());
		setSearch(false);	
		reset();
	}


	return(
		!isLoaded ? <Spinner /> : (
			<List 
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				onPageChange={isSearch ? onPageSearch : onPageChange}
				onDelete={onDelete}
				isFetching={isFetching}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
				models={users}
				total={total}
				current_page={current_page}
				per_page={per_page}
				updateLink="/admin/users/update/"
				createLink="/admin/users/create"
				title="Пользователи"
				onReset={onReset}
				successMessage="Пользователь удален"
			/>
		)
	)
}

export default ListContainer;
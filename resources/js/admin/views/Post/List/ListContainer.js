import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Spinner from './../../../components/Spinner/Spinner';
import List from './../../../components/Post/List/List';

import {getPosts,deletePost} from './../../../store/posts/actions';

const ListContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
		document.title = 'Посты';
	},[]);

	const {isLoaded,posts,current_page,per_page,total} = useSelector(state => ({
		isLoaded: state.posts.isLoaded,
		posts: state.posts.posts,
		current_page: state.posts.current_page,
		per_page: state.posts.per_page,
		total: state.posts.total
	}));

	const [dialogOpen,setDialogOpen] = useState(false);

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onDelete = async(id) => {
		setDialogOpen(true);
		let response = await dispatch(deletePost(id));
		if(response.status === 1)
		{	
			await dispatch(getPosts());
			setTimeout(() => {
				closeDialog();
			},2000);
		}
	}

	const onPageChange = (pageNumber) => {
		dispatch(getPosts(pageNumber));
	}

	return(
		!isLoaded ? <Spinner /> : (
			<List 
			title="Посты"
			posts={posts}
			currentPage={current_page}
			perPage={per_page}
			total={total}
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			successMessage="Пост удален"
			onDelete={onDelete}
			onPageChange={onPageChange}
			updateLink="/admin/posts/update/"
			/>
		)
	)
}

export default ListContainer;
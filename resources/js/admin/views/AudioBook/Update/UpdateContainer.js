import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {updateAudioBook} from './../../../store/audiobooks/actions';

import {schema} from './../../../validation/audiobook/update';
import {getAudioBookGenresList} from './../../../store/audiobooks/genres/actions';
import {getAudioBook} from './../../../store/audiobooks/actions';
import {getFormValuesWithFiles,setErrors} from './../../../helper';

import Update from './../../../components/Content/Update/Update';
import Spinner from './../../../components/Spinner/Spinner';


const UpdateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [book,setBook] = useState(null);

	const [isLoaded,setLoaded] = useState(false);

	const [isFetching,setFetching] = useState(false);

	const [genres,setGenres] = useState(null);

	const [dialogOpen,setDialogOpen] = useState(false);

	const [hasFile,setHasFile] = useState(0);

	const [progress,setProgress] = useState(0);

	const getBook = async(id) => {
		let audioBook = await dispatch(getAudioBook(id));
		let genres = await dispatch(getAudioBookGenresList());

		if(audioBook)
		{
			setBook(audioBook);
			setHasFile((audioBook.hasFile === true) ? 1 : 0);
			setGenres(genres);
			setLoaded(true);
		}
	}

	useEffect(() => {
		let id = props.match.params.id;
		document.title = 'Обновить аудиокнигу';
		if(id)
		{
			getBook(id);
		}
	},[]);

	const {register,handleSubmit,control,errors,setError,watch} = useForm({
		mode: 'onSubmit'
	});

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onSubmit = async(data) => {
		setFetching(true);
		let formData =  await getFormValuesWithFiles(data);
		let response = await dispatch(updateAudioBook(formData,book.id,setProgress));
		setFetching(false);
		setProgress(0);
		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
		else
		{
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/audiobooks/list');
			},2000);
		}
	}

	const uploadFile = watch('uploadFile',hasFile);

	return(
		!isLoaded ? <Spinner /> : (
			<Update
				//
				register={register}
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				errors={errors}
				//
				isFetching={isFetching}
				model={book}
				genres={genres}
				uploadFile={uploadFile}
				successMessage="Аудиокнига успешно обновлена"
				title={'Обновить ' + book.title}
				progress={progress}
				dialogOpen={dialogOpen}
				closeDialog={closeDialog}
			/>
		)
	)
}

export default React.memo(UpdateContainer);
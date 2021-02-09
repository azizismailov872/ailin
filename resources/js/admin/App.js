import React,{useEffect} from 'react';
import {instance} from './api';


const App = (props) => {

	useEffect(async() => {
		let response = await instance.get('/audiobook');
		console.log(response);
	},[]);

	return(
		<div>
			App
		</div>
	)
}

export default App;

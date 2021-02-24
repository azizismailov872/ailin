import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';


const AudioBookGenreContainer = () => {
	return(
		<Switch>
			<Route exact path="/admin/audiobooks/genres/list" render={() => <ListContainer /> } />
			<Route exact path="/admin/audiobooks/genres/create" render={() => <CreateContainer /> } />
			<Route exact path="/admin/audiobooks/genres/update/:id" render={(props) => <UpdateContainer {...props} /> } />
		</Switch>
	)
}

export default  AudioBookGenreContainer;
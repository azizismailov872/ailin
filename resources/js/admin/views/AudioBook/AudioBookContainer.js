import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const AudioBookContainer = () => {
	return(
		<Switch>
			<Route exact path="/admin/audiobooks/list" render={() => <ListContainer /> } />
			<Route exact path="/admin/audiobooks/create" render={() => <CreateContainer /> } />
			<Route exact path="/admin/audiobooks/update/:id" render={(props) => <UpdateContainer {...props} /> } />
		</Switch>
	)
}

export default AudioBookContainer;
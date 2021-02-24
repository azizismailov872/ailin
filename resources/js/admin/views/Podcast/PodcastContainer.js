import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const PodcastContainer = () => {
	return(
		<Switch>
			<Route exact path="/admin/podcasts/list" render={() => <ListContainer /> } />
			<Route exact path="/admin/podcasts/create" render={() => <CreateContainer /> } />
			<Route exact path="/admin/podcasts/update/:id" render={(props) => <UpdateContainer {...props} /> } />
		</Switch>
	)
}

export default PodcastContainer;
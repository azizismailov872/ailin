import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const TrainingGenreContainer = () => {
	return(
		<Switch>
			<Route exact path="/admin/trainings/genres/list" render={() => <ListContainer /> } />
			<Route exact path="/admin/trainings/genres/create" render={() => <CreateContainer /> } />
			<Route exact path="/admin/trainings/genres/update/:id" render={(props) => <UpdateContainer {...props} /> } />
		</Switch>
	)
}

export default TrainingGenreContainer;
import React from 'react';
import {Switch,Route} from 'react-router-dom';

import CreateContainer from './Create/CreateContainer';
import ListContainer from './List/ListContainer';
import UpdateContainer from './Update/UpdateContainer';
import UploadVideoContainer from './UploadVideo/UploadVideoContainer';

const TrainingContainer = () => {
	return(
		<Switch>
			<Route path="/admin/trainings/create" render={() => <CreateContainer />} />
			<Route path="/admin/trainings/list" render={() => <ListContainer />} />
			<Route path="/admin/trainings/update/:id" render={(props) => <UpdateContainer {...props} />} />
			<Route path="/admin/trainings/upload-video/:id" render={(props) => <UploadVideoContainer {...props} />} />
 		</Switch>
	)
}

export default TrainingContainer;
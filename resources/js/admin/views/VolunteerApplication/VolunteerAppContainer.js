import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const VolunteerAppContainer = () => {
	return(
		<Switch>
			<Route path="/admin/volunteer-applications/list" render={() => <ListContainer />} />
			<Route path="/admin/volunteer-applications/create" render={() => <CreateContainer />} />
			<Route path="/admin/volunteer-applications/update/:id" render={(props) => <UpdateContainer {...props} />} />
		</Switch>	
	)
}

export default VolunteerAppContainer;
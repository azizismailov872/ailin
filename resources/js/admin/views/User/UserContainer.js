import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CreateContainer from './Create/CreateContainer';
import ListContainer from './List/ListContainer';
import UpdateContainer from './Update/UpdateContainer';

const UserContainer = () => {
	return(
		<Switch>
			<Route path="/admin/users/list" render={() => <ListContainer />} />
			<Route path="/admin/users/create" render={() => <CreateContainer />} />
			<Route path="/admin/users/update/:id" render={(props) => <UpdateContainer {...props} />} />
		</Switch>
	);
}

export default UserContainer;
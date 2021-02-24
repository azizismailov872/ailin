import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const AdminUserContainer = () => {
	return(
		<Switch>
			<Route path="/admin/admin-users/list" render={() => <ListContainer />} />
			<Route path="/admin/admin-users/create" render={() => <CreateContainer />} />
			<Route path="/admin/admin-users/update/:id" render={(props) => <UpdateContainer {...props} />} />
		</Switch>
	)
}

export default AdminUserContainer;
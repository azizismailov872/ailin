import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const RegisterAppContainer = () => {
	return(
		<Switch>
			<Route path="/admin/register-applications/list" render={() => <ListContainer />} />
			<Route path="/admin/register-applications/create" render={() => <CreateContainer />} />
			<Route path="/admin/register-applications/update/:id" render={(props) => <UpdateContainer {...props} />} />
		</Switch>	
	);
}

export default RegisterAppContainer;
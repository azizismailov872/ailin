import React from 'react';
import {Switch,Route} from 'react-router-dom';

import ListContainer from './List/ListContainer';
import CreateContainer from './Create/CreateContainer';
import UpdateContainer from './Update/UpdateContainer';

const PostContainer = () => {
	return(
		<Switch>
			<Route path="/admin/posts/list" render={() => <ListContainer />} />
			<Route path="/admin/posts/create" render={() => <CreateContainer />} />
			<Route path="/admin/posts/update/:id" render={(props) => <UpdateContainer {...props} />}  />
		</Switch>
	)
}

export default PostContainer;
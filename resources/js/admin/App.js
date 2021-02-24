import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';

import './App.css';

const App = ({isAuth,user}) => {
	return(
		!isAuth ? (
			<Switch>
				<Route exact path="/admin/login" render={(props) => <AuthLayout {...props} />} />
				<Redirect from="/admin" to="/admin/login" />
			</Switch>
		) : (
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} user={user} />} />
				<Redirect exact from="/admin" to="/admin/users/list" />
			</Switch>	
		)
	)
}

export default App;

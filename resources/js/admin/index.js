import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';

import AppContainer from './AppContainer';

import "./assets/css/argon-dashboard-react.min.css";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
    <BrowserRouter>
    	<Provider store={store}>
    		<AppContainer />
    	</Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


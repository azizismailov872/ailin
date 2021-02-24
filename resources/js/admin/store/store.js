import {combineReducers, createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {appReducer} from './reducer';
import {authReducer} from './auth/reducer';
import {audioBookReducer} from './audiobooks/reducer';
import {podcastsReducer} from './podcasts/reducer';
import {audiobookGenresReducer} from './audiobooks/genres/reducer';
import {podcastGenresReducer} from './podcasts/genres/reducer';
import {trainingGenresReducer} from './trainings/genres/reducer';
import {trainingReducer} from './trainings/reducer';
import { userReducer } from './users/reducer';
import {adminUserReducer} from './adminUsers/reducer';
import {registerAppReducer} from './registerApplications/reducer';
import {volunteerAppReducer} from './volunteerApplications/reducer';


const reducers = combineReducers({
	app: appReducer,
	auth: authReducer,
	users:userReducer,
	adminUsers: adminUserReducer,
	audiobooks: audioBookReducer,
	podcasts: podcastsReducer,
	audiobookGenres: audiobookGenresReducer,
	podcastGenres: podcastGenresReducer,
	trainingGenres: trainingGenresReducer,
	trainings: trainingReducer,
	registerApps: registerAppReducer,
	volunteerApps: volunteerAppReducer,
});

let store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
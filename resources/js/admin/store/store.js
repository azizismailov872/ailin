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
import {postsReducer} from './posts/reducer';


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
	posts: postsReducer,
});

let store = createStore(reducers,compose(
	applyMiddleware(thunk),
));

export default store;
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ClubReducer from './ClubReducer';


const rootReducer = combineReducers({
    form: formReducer,
    clubs: ClubReducer
});

export default rootReducer;

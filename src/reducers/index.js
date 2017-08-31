import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ClubReducer from './ClubReducer';
import PlayerReducer from './PlayerReducer';


const rootReducer = combineReducers({
    form: formReducer,
    players: PlayerReducer,
    clubs: ClubReducer
});

export default rootReducer;

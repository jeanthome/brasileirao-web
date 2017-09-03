import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ClubReducer from './ClubReducer';
import PlayerReducer from './PlayerReducer';
import NewMatchReducer from './NewMatchReducer';


const rootReducer = combineReducers({
    form: formReducer,
    players: PlayerReducer,
    clubs: ClubReducer,
    newMatch: NewMatchReducer
});

export default rootReducer;

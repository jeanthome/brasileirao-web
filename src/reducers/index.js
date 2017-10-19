import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ClubReducer from './ClubReducer';
import PlayerReducer from './PlayerReducer';
import NewMatchReducer from './NewMatchReducer';
import MatchReducer from './MatchReducer';
import ModalReducer from './ModalReducer';

const rootReducer = combineReducers({
    form: formReducer,
    players: PlayerReducer,
    clubs: ClubReducer,
    newMatch: NewMatchReducer,
    matches: MatchReducer,
    modals: ModalReducer
});

export default rootReducer;

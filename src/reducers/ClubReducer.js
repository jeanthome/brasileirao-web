import _ from 'lodash';
import {FETCH_CLUBS} from '../actions/ClubActions';

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_CLUBS:
            return _.mapKeys(action.payload.data, 'identificator');

        default:
            return state;
    }
}
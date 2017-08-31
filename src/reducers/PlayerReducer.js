
import _ from 'lodash';
import {INSERT_PLAYER} from '../actions/PlayerActions';

export default function (state = {}, action) {

    switch (action.type) {
        case INSERT_PLAYER:
            return state;

        default:
            return state;
    }
}
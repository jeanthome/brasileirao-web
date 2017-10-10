import {FETCH_MATCHES, FETCH_MATCH, FETCH_GOAL_TYPE} from "../actions/MatchActions";
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_MATCHES:
            const lookup = _.mapKeys(action.payload.data, 'identifier');
            return {...state, ["matchList"]: lookup};

        case FETCH_MATCH:
            return {...state, ["matchToDetail"]: action.payload.data};

        case FETCH_GOAL_TYPE:
            return {...state, ["goalType"]: action.payload.data};

        default:
            return state;
    }
}

import {FETCH_STADIUMS} from '../actions/NewMatchActions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_STADIUMS:
            return {...state, ["stadiums"]: action.payload.data}

        default:
            return state;
    }
}
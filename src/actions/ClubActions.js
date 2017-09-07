import axios from 'axios';
import {ROOT_URL} from '../utils/Constants';

export const FETCH_CLUBS = 'FETCH_CLUBS';

export function fetchClubs() {

    const request = axios.get(`${ROOT_URL}/clubs`);
    return {
        type: FETCH_CLUBS,
        payload: request
    };
}
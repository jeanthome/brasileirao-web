import axios from 'axios';

export const FETCH_CLUBS = 'FETCH_CLUBS';

const ROOT_URL = 'http://localhost:8090';

export function fetchClubs() {

    const request = axios.get(`${ROOT_URL}/clubs`);
    return {
        type: FETCH_CLUBS,
        payload: request
    };
}
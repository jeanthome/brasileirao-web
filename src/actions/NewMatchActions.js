import axios from 'axios';
export const FETCH_STADIUMS = 'FETCH_STADIUMS';
export const INSERT_MATCH = 'INSERT_MATCH';

const ROOT_URL = 'http://localhost:8090';

export function fetchStadiums() {

    const request = axios.get(`${ROOT_URL}/matches/stadiums`);

    return {
        type: FETCH_STADIUMS,
        payload: request
    }
}

export function insertMatch(values, callback) {

    console.log("Insert Actions", values);

    const request = axios.post(`${ROOT_URL}/matches`, values).then(() => callback());
    return {
        type: INSERT_MATCH,
        payload: request
    }
}
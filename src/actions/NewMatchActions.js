import axios from 'axios';
export const FETCH_STADIUMS = 'FETCH_STADIUMS';

const ROOT_URL = 'http://localhost:8090';

export function fetchStadiums() {

    const request = axios.get(`${ROOT_URL}/matches/stadiums`);

    return {
        type: FETCH_STADIUMS,
        payload: request
    }
}
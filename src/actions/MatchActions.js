import axios from "axios";
export const FETCH_MATCHES = 'FETCH_MATCHES';


const ROOT_URL = 'http://localhost:8090';

export function fetchMatchesInRound(roundNumber) {

    const request = axios.get(`${ROOT_URL}/matches/round/${roundNumber}`);

    console.log("Match Action", roundNumber);

    return {
        type: FETCH_MATCHES,
        payload: request
    }
}
import axios from "axios";
import {ROOT_URL} from "../utils/Constants";

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const FETCH_MATCH = 'FETCH_MATCH';

export function fetchMatchesInRound(roundNumber) {

    const request = axios.get(`${ROOT_URL}/matches/round/${roundNumber}`);
    return {
        type: FETCH_MATCHES,
        payload: request
    }
}

export function fetchMatch(matchId) {

    const request = axios.get(`${ROOT_URL}/matches/${matchId}`);

    return {
        type: FETCH_MATCH,
        payload: request
    }
}

import axios from "axios";
import {ROOT_URL} from '../utils/Constants';

export const FETCH_MATCHES = 'FETCH_MATCHES';

export function fetchMatchesInRound(roundNumber) {

    const request = axios.get(`${ROOT_URL}/matches/round/${roundNumber}`);

    console.log("Match Action", roundNumber);

    return {
        type: FETCH_MATCHES,
        payload: request
    }
}
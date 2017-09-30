import axios from "axios";
import {ROOT_URL} from "../utils/Constants";

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const SELECT_MATCH_TO_DETAIL = 'SELECT_MATCH_TO_DETAIL';

export function fetchMatchesInRound(roundNumber) {

    const request = axios.get(`${ROOT_URL}/matches/round/${roundNumber}`);
    return {
        type: FETCH_MATCHES,
        payload: request
    }
}

export function selectMatchToDetail(matchId) {

    return {
        type: SELECT_MATCH_TO_DETAIL,
        payload: matchId
    }
}
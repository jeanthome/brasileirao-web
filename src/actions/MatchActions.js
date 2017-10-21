import axios from "axios";
import {ROOT_URL} from "../utils/Constants";

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const FETCH_MATCH = 'FETCH_MATCH';
export const FETCH_GOAL_TYPE = 'FETCH_GOAL_TYPE';
export const INSERT_GOAL = 'INSERT_GOAL';

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

export function fetchGoalType() {

    const request = axios.get(`${ROOT_URL}/matches/goalType`);
    return {
        type: FETCH_GOAL_TYPE,
        payload: request
    }
}

export function insertGoal(values, callback) {

    const request = axios.put(`${ROOT_URL}/matches/goals`, values).then( () => callback());

    return {
        type: INSERT_GOAL,
        payload: request
    }
}


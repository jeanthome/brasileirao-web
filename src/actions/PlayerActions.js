import axios from 'axios';
import {stringToDate} from '../utils/ConvertHelper';
import {ROOT_URL} from '../utils/Constants';

export const INSERT_PLAYER = 'INSERT_PLAYER';

export function insertPlayer(values, callback) {

    if (values.birthDate){
        values.birthDate = stringToDate(values.birthDate, "dd/MM/yyyy", "/");
    }

    const request = axios.post(`${ROOT_URL}/players`, values).then(() => callback());

    return {
        type: INSERT_PLAYER,
        payload: request
    };
}

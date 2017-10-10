
export const ROOT_URL = 'http://localhost:8090';

/**
 * Os possíveis Status dos jogadores relacionados em uma partida.
 * @type {Object}
 */
export const PlayerStatus = Object.freeze({
    IN_GAME: Symbol("In game"),
    AVAILABLE:  Symbol("Available"),
    NOT_AVAILABLE: Symbol("Not available"),
    KICKET_OUT: Symbol("Kicked out")
});

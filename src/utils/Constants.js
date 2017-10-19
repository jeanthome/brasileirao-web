export const ROOT_URL = 'http://localhost:8090';

/**
 * Os possíveis Status dos jogadores relacionados em uma partida.
 * @type {Object}
 */
export const PlayerStatus = Object.freeze({
    IN_GAME: "In game",
    AVAILABLE: "Available",
    NOT_AVAILABLE: "Not available",
    KICKET_OUT: "Kicked out"
});

/**
 * Define as listas de modals existente.
 * @type {Object}
 */
export const ModalTypes = Object.freeze({
    NEW_GOAL_MODAL: "NEW_GOAL_MODAL"
});

/**
 * Define os tipos dos clubes em uma partida.
 * @type {Object}
 */
export const ClubTypes = Object.freeze({
    HOME_CLUB: "HOME_CLUB",
    VISITOR_CLUB: "VISITOR_CLUB"
});

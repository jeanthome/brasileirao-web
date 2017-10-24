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
    NEW_GOAL_MODAL: "NEW_GOAL_MODAL",
    NEW_CARD_MODAL: "NEW_CARD_MODAL",
    NEW_SUBSTITUTION_MODAL: "NEW_SUBSTITUTION_MODAL"
});

/**
 * Define os tipos dos clubes em uma partida.
 * @type {Object}
 */
export const ClubTypes = Object.freeze({
    HOME_CLUB: "HOME_CLUB",
    VISITOR_CLUB: "VISITOR_CLUB"
});


/**
 * Define as cores do cartão que um jogador pode receber.
 * @type {Object}
 */
export const CardColors = Object.freeze({
    YELLOW: {value: "YELLOW", label: "Amarelo"},
    RED: {value: "RED", label: "Vermelho"}
});

/**
 * Os tempos de uma partida.
 * @type {Object}
 */
export const HalfEnum = Object.freeze({
    FIRST_HALF: "FIRST_HALF",
    SECOND_HALF: "SECOND_HALF"
});
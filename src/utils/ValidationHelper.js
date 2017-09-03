/**
 * Verifica se valor passado representa um número inteiro.
 *
 * @param value Valor a ser validado.
 * @returns {boolean} true, caso valor represente um inteiro. false, caso contrário.
 */
export function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

export function isValidRoundNumber(value) {

    if (isInt(value)) {
        if (parseInt(Number(value)) > 38 || parseInt(Number(value)) < 1) {
            return false;
        }
        return true;
    }
    return false;
}
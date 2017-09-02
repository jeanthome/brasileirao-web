/**
 * Verifica se valor passado representa um número inteiro.
 *
 * @param value Valor a ser validado.
 * @returns {boolean} true, caso valor represente um inteiro. false, caso contrário.
 */
export function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
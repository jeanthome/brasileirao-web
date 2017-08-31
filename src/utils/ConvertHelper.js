/**
 * Converte uma string que representa uma data em um objeto Date.
 *
 * @param date String com a data a ser convertida.
 * @param format Formato atual da data. Ex.: "dd/MM/yyyy".
 * @param delimiter Delimitador que separa os parâmetros da data. Ex.: "/".
 * @returns {Date} Data convertida.
 */
export function stringToDate(date, format, delimiter) {
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = date.split(delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
}
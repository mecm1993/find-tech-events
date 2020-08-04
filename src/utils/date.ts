export const months: Record<number, string> = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December'
};

export function getOrdinalNumber(day: number): string {
    let result;
    switch(day) {
        case 1:
        case 11:
        case 21:
        case 31:
        result = 'st';
        break;
        case 2:
        case 12:
        case 22:
        result = 'nd';
        break;
        case 3:
        case 13:
        case 23:
        result = 'rd';
        break;
        default:
        result = 'th';
    }
    return result;
}

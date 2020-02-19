export const chooseDeclension = (num: number, one = `ПЕРЕСАДКА`, three = `ПЕРЕСАДКИ`, five = `ПЕРЕСАДОК`) => {
    num %= 100;

    if (num >= 11 && num <= 19) {
        return five;
    }

    num %= 10;

    if (num === 1) {
        return one;
    }

    if (num > 0 && num <= 4) {
        return three;
    }

    return five;
};

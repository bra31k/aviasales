import {chooseDeclension} from "./misc";

describe(`chooseDeclaration`, () => {
    test(`when 1 stop`, () => {
        expect(chooseDeclension(1)).toBe(`ПЕРЕСАДКА`)
    });

    test(`when 2 to 5 stops`, () => {
        expect(chooseDeclension(3)).toBe(`ПЕРЕСАДКИ`)
    });

    test(`when > 5 stops`, () => {
        expect(chooseDeclension(6)).toBe(`ПЕРЕСАДОК`)
    });
});

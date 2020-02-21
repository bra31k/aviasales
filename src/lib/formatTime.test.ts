import {DateTime, Settings} from "luxon";

import {formatDateToTime, durationToHourAndMinutes} from "./formatTime";

Settings.defaultLocale = `ru`;

describe(`formatTime`, () => {
    test(`formatDateToTime`, () => {
        const date = DateTime.local(2020, 2, 2, 12, 12);

        expect(formatDateToTime(date)).toBe(`12:12 PM`) // TODO: нужно разобраться почему настройки defaultLocale не работают
    });

    test(`durationToHourAndMinutes`, () => {
        expect(durationToHourAndMinutes(660)).toBe(`11ч 0м`);
    });
});

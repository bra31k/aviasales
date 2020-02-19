import {DateTime} from "luxon";

export const formatDateToTime = (date: DateTime) => date.toLocaleString(DateTime.TIME_SIMPLE);

export const durationToHourAndMinutes = (minutes: number) => `${Math.floor(minutes / 60)}ч ${Math.ceil(minutes % 60)}м`;

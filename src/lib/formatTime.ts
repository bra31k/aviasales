import {DateTime} from "luxon";

export const formatDateToTime = (date: DateTime): string => date.toLocaleString(DateTime.TIME_SIMPLE);

export const durationToHourAndMinutes = (minutes: number): string => `${Math.floor(minutes / 60)}ч ${Math.ceil(minutes % 60)}м`;

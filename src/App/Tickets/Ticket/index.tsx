import React from "react";
import {DateTime, Settings} from "luxon";

import {chooseDeclension} from "../../../lib/misc";
import {formatDateToTime, durationToHourAndMinutes} from "../../../lib/formatTime";

import "./index.css";

Settings.defaultLocale = `ru`;

interface ISegment {
    origin: string,
    destination: string,
    date: string,
    stops: Array<string>,
    duration: number,
}

export interface ITicket {
    price: number,
    carrier: string,
    segments: Array<ISegment>
}

const Ticket = ({price, carrier, segments}: ITicket) => {
    return (
        <div className="ticket">
            <div className="ticket-head">
                <span className="ticket-head__price">
                    {price} P
                </span>
                <img
                    src={`http://pics.avs.io/99/36/${carrier}.png`}
                    className="ticket-head__image"
                    alt={`${carrier} Logo`}
                />
            </div>
            <div className="ticket-content">
                {segments.map((segment) =>
                    <React.Fragment key={`${segment.date} - ${segment.duration}`}>
                        <div className="ticket-content__item">
                            <div className="ticket-item__title">
                                {segment.origin} – {segment.destination}
                            </div>
                            <div className="ticket-item__value">
                                {formatDateToTime(DateTime.fromISO(segment.date))} –
                                {formatDateToTime(DateTime.fromISO(segment.date).plus({minute: segment.duration}))}
                            </div>
                        </div>
                        <div className="ticket-content__item">
                            <div className="ticket-item__title">
                                В ПУТИ
                            </div>
                            <div className="ticket-item__value">
                                {durationToHourAndMinutes(segment.duration)}
                            </div>
                        </div>
                        <div className="ticket-content__item">
                            {!!segment.stops.length && (
                                <>
                                    <div className="ticket-item__title">
                                        {segment.stops.length} {chooseDeclension(segment.stops.length)}
                                    </div>
                                    <div className="ticket-item__value">
                                        {segment.stops.join(`, `)}
                                    </div>
                                </>
                            )}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Ticket;

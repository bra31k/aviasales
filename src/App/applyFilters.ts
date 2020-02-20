import {ITicket} from "./Tickets/Ticket";

export const applyFilters = (filters: number[], tickets: ITicket[]) => {
    if (!filters.length) {
        return tickets;
    }

    return tickets.filter((ticket: ITicket) =>
        ticket.segments.every((segment) =>
            filters.includes(segment.stops.length)
        )
    );
};

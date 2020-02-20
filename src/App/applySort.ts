import {ITicket} from "./Tickets/Ticket";
import {sortType} from "./index";

export const applySort = (sort: sortType, tickets: ITicket[]) => {
    let sortedFilters: ITicket[];

    if (sort === `price`) {
        sortedFilters = tickets.sort((a, b) => a.price > b.price ? 1 : -1);
    } else {
        sortedFilters =
            tickets
                .sort((first, second) => {
                    const [firstDuration, secondDuration] =
                        [first, second]
                            .map((item) => item.segments
                                .reduce((sum, segment) => sum += segment.duration, 0)
                            );

                    return firstDuration > secondDuration ? 1 : -1
                });
    }

    return sortedFilters;
};

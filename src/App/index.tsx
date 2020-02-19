import React, {useEffect, useState} from "react";

import Api from "./Api/api";
import Header from "./Header"
import Filters from "./Filters";
import Sort from "./Sort";
import Tickets from "./Tickets";
import ErrorBoundary from "./ErrorBoundary";
import {ITicket} from "./Tickets/Ticket";

import "./index.css";

const App: React.FC = () => {
    const [isLoading, setLoadStatus] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [tickets, setTickets] = useState<Array<ITicket>>([]);
    const [filters, setFilter] = useState<Array<number>>([]);
    const [sort, setSort] = useState<'price' | 'duration'>(`price`);

    const getTickets = async () => {
        setLoadStatus(true);

        try {
            const items = await Api();

            setTickets(items);
            setError(null);
        } catch (error) {
            setError(error)
        }

        setLoadStatus(false);
    };

    useEffect(() => {
        getTickets();
    }, []);

    let sortedAndFilteredTickets = tickets;

    if (filters.length) {
        sortedAndFilteredTickets =
            tickets
                .filter((ticket: ITicket) =>
                    ticket.segments.every((segment) =>
                        filters.includes(segment.stops.length)
                    )
                );
    }

    if (sort === `price`) {
        sortedAndFilteredTickets
            .sort((a, b) => a.price > b.price ? 1 : -1);
    } else if (sort === `duration`) {
        sortedAndFilteredTickets
            .sort((first, second) => {
                const [firstDuration, secondDuration] =
                    [first, second]
                        .map((item) => item.segments
                            .reduce((sum, segment) => sum += segment.duration, 0)
                        );

                return firstDuration > secondDuration ? 1 : -1
            });
    }

    return (
        <div className="app">
            <Header isLoading={isLoading}/>
            <div className="content">
                <div className="block">
                    <Filters
                        filters={filters}
                        setFilter={setFilter}
                    />
                </div>
                <div className="block">
                    <Sort
                        sort={sort}
                        setSort={setSort}
                    />
                    <ErrorBoundary
                        error={!!error}
                        tryMore={getTickets}
                    >
                        <Tickets tickets={sortedAndFilteredTickets}/>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};

export default App;

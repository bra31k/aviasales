import React, {useEffect, useState} from "react";

import Api from "./Api/";
import Header from "./Header"
import Filters from "./Filters";
import Sort from "./Sort";
import Tickets from "./Tickets";
import ErrorBoundary from "./ErrorBoundary";
import {applySort} from "./applySort";
import {applyFilters} from "./applyFilters";
import {ITicket} from "./Tickets/Ticket";

import "./index.css";

export type sortType = `price` | `duration`;

const App: React.FC = () => {
    const [isLoading, setLoadStatus] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [tickets, setTickets] = useState<Array<ITicket>>([]);
    const [filters, setFilter] = useState<Array<number>>([]);
    const [sort, setSort] = useState<sortType>(`price`);

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

    const filteredTickets = applyFilters(filters, tickets);
    const filteredAndSortedTickets = applySort(sort, filteredTickets);

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
                        <Tickets tickets={filteredAndSortedTickets}/>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};

export default App;

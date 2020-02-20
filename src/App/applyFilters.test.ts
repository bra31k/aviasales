import {applyFilters} from "./applyFilters";
import {ITicket} from "./Tickets/Ticket";

const tickets: Array<ITicket> = [
    {
        price: 100,
        carrier: `es`,
        segments: [
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 0,
            },
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 0,
            },
        ]
    }
];

describe(`apply filters`, () => {
    test(`without selected filters`, () => {
        expect(applyFilters([], tickets)).toStrictEqual(tickets);
    });

    test(`without stops`, () => {
        expect(applyFilters([0], tickets)).toStrictEqual(tickets);
    });

    test(`when 1 stop`, () => {
        const newTicket: ITicket = {
            price: 100,
            carrier: `es`,
            segments: [
                {
                    stops: ["a"],
                    origin: ``,
                    destination: ``,
                    date: ``,
                    duration: 0,
                },
                {
                    stops: ["b"],
                    origin: ``,
                    destination: ``,
                    date: ``,
                    duration: 0,
                },
            ]};

        const newTickets: Array<ITicket> = [...tickets];

        newTickets.push(newTicket);

        expect(applyFilters([1], newTickets)).toStrictEqual([newTicket]);
    });

    test(`when all selected`, () => {
        const newTicket: ITicket = {
            price: 100,
            carrier: `es`,
            segments: [
                {
                    stops: ["a"],
                    origin: ``,
                    destination: ``,
                    date: ``,
                    duration: 0,
                },
                {
                    stops: ["b", "c"],
                    origin: ``,
                    destination: ``,
                    date: ``,
                    duration: 0,
                },
            ]};

        const newTickets: Array<ITicket> = [...tickets];

        newTickets.push(newTicket);

        expect(applyFilters([0, 1, 2 ,3], newTickets)).toStrictEqual(newTickets);
    });
});

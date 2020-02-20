import {applySort} from "./applySort";
import {ITicket} from "./Tickets/Ticket";

const tickets: Array<ITicket> = [
    {
        price: 200,
        carrier: `es`,
        segments: [
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 200,
            },
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 100,
            },
        ]
    },
    {
        price: 100,
        carrier: `es`,
        segments: [
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 100,
            },
            {
                stops: [],
                origin: ``,
                destination: ``,
                date: ``,
                duration: 100,
            },
        ]
    },
    {
        price: 300,
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
                duration: 100,
            },
        ]
    }
];

describe(`apply sort`, () => {
    test(`sort by price`, () => {
        expect(applySort(`price`, [...tickets]).map(({price}) => price)).toStrictEqual([100, 200, 300]);
    });

    test(`sort by duration`, () => {
        expect(applySort(`duration`, [...tickets])).toStrictEqual([tickets[2], tickets[1], tickets[0]]);
    })
});

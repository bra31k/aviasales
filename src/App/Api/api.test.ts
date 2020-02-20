import getTickets, {getSearchId, getTicketsPack} from "./index";

beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
});

describe(`api`, () => {
    test(`searchId request`, async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify({searchId: `searchId`}));

        expect(await getSearchId()).toBe(`searchId`);
    });

    test(`ticketPack request`, async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify({tickets: [], stop: false}));

        expect(await getTicketsPack(`searchId`)).toStrictEqual({tickets: [], stop: false});
    });

    test(`tickets request`, async () => {
        // @ts-ignore
        fetch.once(JSON.stringify({
                searchId: `searchId`
            }))
            .once(JSON.stringify({
                tickets: [null],
                stop: false,
            }))
            .once(JSON.stringify({
                tickets: [null],
                stop: false,
            }))
            .once(JSON.stringify({
                tickets: [null],
                stop: true,
            }));

        const tickets = await getTickets();

        expect(tickets.length).toEqual(3);
    });
});



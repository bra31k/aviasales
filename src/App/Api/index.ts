import {ITicket} from "../Tickets/Ticket";

let searchId: string;

export const getSearchId = async () => {
    try {
        const response = await fetch(`https://front-test.beta.aviasales.ru/search`);

        const json: any = await response.json();

        return json.searchId;
    } catch (error) {
        throw error
    }
};

export const getTicketsPack = async (searchId?: string) => {
    try {
        const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

        return await response.json();
    } catch (error) {
        throw error
    }
};

export default async () => {
    try {
        if (!searchId) {
            searchId = await getSearchId();
        }

        let ticketResponse = await getTicketsPack(searchId);
        let tickets: ITicket[] = ticketResponse.tickets;

        while (!ticketResponse.stop) {
            ticketResponse = await getTicketsPack(searchId);
            tickets = [...tickets, ...ticketResponse.tickets];
        }

        return tickets;
    } catch (error) {
        throw error;
    }
};

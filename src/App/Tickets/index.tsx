import React from "react";

import Ticket, {ITicket} from "./Ticket";

import "./index.css";

interface ITickets {
    tickets: Array<ITicket>
}

const Tickets = ({tickets}: ITickets) => {
    return (
        <div className="tickets">
            {tickets.slice(0, 5).map((ticket) =>
                <Ticket
                    key={`${ticket.price}-${ticket.carrier}`}
                    {...ticket}
                />
            )}
        </div>
    );
};

export default Tickets;

import TicketItem from "./TicketItem";

const TicketList = ({ tickets, dispatch }) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => {
        return <TicketItem
          key={ticket.id}
          ticket={ticket}
          dispatch={dispatch}
        ></TicketItem>;
      })}
    </div>
  );
};

export default TicketList;

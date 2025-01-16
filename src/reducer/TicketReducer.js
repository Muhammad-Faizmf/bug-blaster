export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD-TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE-TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };
    case "DELETE-TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    case "SET-EDITING-TICKET":
      return {
        ...state,
        editingTicket: action.payload,
      };
    case "CLEAR-EDITING-TICKET":
      return {
        ...state,
        editingTicket: null,
      };
    default:
      return state;
  }
}

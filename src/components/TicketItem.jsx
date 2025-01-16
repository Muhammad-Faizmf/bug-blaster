const TicketItem = ({ ticket, dispatch }) => {
  const { id, title, desc, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE-TICKET",
      payload: { id },
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "SET-EDITING-TICKET",
      payload: ticket ,
    });
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button
        className="button"
        style={{ backgroundColor: "red" }}
        onClick={handleDelete}
      >
        Delete
      </button>
      <button className="button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default TicketItem;

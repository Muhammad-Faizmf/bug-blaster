import { useEffect, useState } from "react";

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDesc("");
    setPriority("1");
  };

  useEffect(() => {
    if (editingTicket != null) {
      console.log(editingTicket.title);
      setTitle(editingTicket.title);
      setDesc(editingTicket.desc);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      desc,
      priority,
    };
    dispatch({
      type: editingTicket ? "UPDATE-TICKET" : "ADD-TICKET",
      payload: ticketData,
    });
    clearForm();
  };

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          required
          onInvalid={(e) => e.target.setCustomValidity("Please fill the title")}
          onInput={(e) => e.target.setCustomValidity("")}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-input textarea"
          value={desc}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Please fill the description")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <fieldset className="priority-fieldset">
          <legend> Priority </legend>
          {Object.entries(priorityLabels).map(([value, label]) => {
            return (
              <label key={value} className="priority-label">
                <input
                  type="radio"
                  value={value}
                  checked={priority === value}
                  className="priority-input"
                  onChange={(e) => setPriority(e.target.value)}
                />
                {label}
              </label>
            );
          })}
        </fieldset>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;

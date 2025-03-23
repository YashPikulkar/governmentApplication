import React, { useState } from "react";

const RaiseTicket = () => {
  const [ticket, setTicket] = useState("");
  const [tickets, setTickets] = useState(
    JSON.parse(localStorage.getItem("supportTickets")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticket.trim()) {
      alert("Please enter a query before submitting.");
      return;
    }

    const newTicket = {
      id: Date.now(),
      message: ticket,
      status: "Open",
    };

    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    localStorage.setItem("supportTickets", JSON.stringify(updatedTickets));

    setTicket(""); // Clear the input field
    alert("Your ticket has been raised successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Raise a Support Ticket</h2>
      <p className="text-center text-muted">
        If you have any issues, please submit a support ticket.
      </p>

      <div className="card shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Your Query</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Describe your issue..."
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Display Raised Tickets */}
      {tickets.length > 0 && (
        <div className="mt-4">
          <h3>Previous Tickets</h3>
          <ul className="list-group">
            {tickets.map((t) => (
              <li key={t.id} className="list-group-item">
                <strong>Ticket #{t.id}:</strong> {t.message} -{" "}
                <span className="badge bg-warning">{t.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RaiseTicket;

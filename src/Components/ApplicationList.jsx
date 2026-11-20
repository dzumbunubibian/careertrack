import { useState } from "react";

function ApplicationList({ applications, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || app.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="applications-section">
      <div className="list-heading">
        <div>
          <h2>Your Applications</h2>
          <p>Manage and monitor your opportunities.</p>
        </div>

        <input
          className="search-input"
          placeholder="Search company or job..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filter-row">
        {["All", "Applied", "Interview", "Accepted", "Rejected"].map((status) => (
          <button
            key={status}
            className={filter === status ? "filter-button selected" : "filter-button"}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Type</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id}>
                <td>{app.company}</td>
                <td>{app.title}</td>
                <td>{app.type}</td>
                <td>{app.date}</td>
                <td>
                  <span className={`status ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <button onClick={() => onEdit(app)}>Edit</button>
                  <button className="delete-button" onClick={() => onDelete(app.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredApplications.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-message">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ApplicationList;
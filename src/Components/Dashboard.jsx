import StatsCards from "./StatsCards";

function Dashboard({ applications, setActivePage, onEdit }) {
  const recentApplications = [...applications]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <>
      <div className="welcome-section">
        <div>
          <p className="eyebrow">YOUR CAREER JOURNEY</p>
          <h1>Welcome to CareerTrack</h1>
          <p>Keep your opportunities organised and stay on top of your goals.</p>
        </div>

        <button className="primary-button" onClick={() => setActivePage("add")}>
          + Add Application
        </button>
      </div>

      <StatsCards applications={applications} />

      <section className="recent-section">
        <div className="section-heading">
          <div>
            <h2>Recent Applications</h2>
            <p>Your latest career opportunities.</p>
          </div>

          <button
            className="text-button"
            onClick={() => setActivePage("applications")}
          >
            View All
          </button>
        </div>

        {recentApplications.length === 0 ? (
          <div className="empty-state">
            <h3>No applications yet</h3>
            <p>Start tracking your opportunities by adding your first application.</p>
            <button className="primary-button" onClick={() => setActivePage("add")}>
              Add Your First Application
            </button>
          </div>
        ) : (
          <div className="recent-list">
            {recentApplications.map((app) => (
              <div className="recent-item" key={app.id}>
                <div className="company-avatar">
                  {app.company.charAt(0).toUpperCase()}
                </div>

                <div className="recent-info">
                  <h3>{app.company}</h3>
                  <p>{app.title}</p>
                </div>

                <span className={`status ${app.status.toLowerCase()}`}>
                  {app.status}
                </span>

                <button className="edit-link" onClick={() => onEdit(app)}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Dashboard;
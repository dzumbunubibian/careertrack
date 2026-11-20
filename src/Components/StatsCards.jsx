function StatsCards({ applications }) {
  const total = applications.length;

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const accepted = applications.filter(
    (app) => app.status === "Accepted"
  ).length;

  const pending = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">▤</div>
        <p>Total Applications</p>
        <h2>{total}</h2>
      </div>

      <div className="stat-card">
        <div className="stat-icon">◷</div>
        <p>Interviews</p>
        <h2>{interviews}</h2>
      </div>

      <div className="stat-card">
        <div className="stat-icon">✓</div>
        <p>Accepted</p>
        <h2>{accepted}</h2>
      </div>

      <div className="stat-card">
        <div className="stat-icon">⌛</div>
        <p>Awaiting Response</p>
        <h2>{pending}</h2>
      </div>
    </div>
  );
}

export default StatsCards;
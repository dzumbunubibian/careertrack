function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">C</div>
        <h2>CareerTrack</h2>
      </div>

      <p className="menu-label">MENU</p>

      <nav>
        <button
          className={activePage === "dashboard" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("dashboard")}
        >
          <span></span> Dashboard
        </button>

        <button
          className={activePage === "applications" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("applications")}
        >
          <span></span> Applications
        </button>

        <button
          className={activePage === "add" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("add")}
        >
          <span>+</span> Add Application
        </button>
      </nav>

      <div className="sidebar-bottom">
        <p>Organise your career journey.</p>
        <small>CareerTrack © 2026</small>
      </div>
    </aside>
  );
}

export default Sidebar;
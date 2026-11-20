import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import ApplicationForm from "./Components/ApplicationForm";
import ApplicationList from "./Components/ApplicationList";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const [applications, setApplications] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("careerApplications")) || [];
    } catch {
      return [];
    }
  });

  const [editingApplication, setEditingApplication] = useState(null);

  useEffect(() => {
    localStorage.setItem("careerApplications", JSON.stringify(applications));
  }, [applications]);

  function handleSave(formData) {
    if (editingApplication) {
      setApplications((previous) =>
        previous.map((app) =>
          app.id === editingApplication.id
            ? { ...formData, id: editingApplication.id }
            : app
        )
      );

      setEditingApplication(null);
    } else {
      const newApplication = {
        ...formData,
        id: crypto.randomUUID()
      };

      setApplications((previous) => [newApplication, ...previous]);
    }

    setActivePage("applications");
  }

  function handleEdit(application) {
    setEditingApplication(application);
    setActivePage("add");
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (confirmed) {
      setApplications((previous) =>
        previous.filter((app) => app.id !== id)
      );
    }
  }

  function handlePageChange(page) {
    setEditingApplication(null);
    setActivePage(page);
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      <main className="main-content">
        <header className="topbar">
          <div>
            <p>Career Management</p>
          </div>

          <div className="profile">
            <div className="profile-avatar">U</div>
            <span>My Workspace</span>
          </div>
        </header>

        {activePage === "dashboard" && (
          <Dashboard
            applications={applications}
            setActivePage={handlePageChange}
            onEdit={handleEdit}
          />
        )}

        {activePage === "applications" && (
          <ApplicationList
            applications={applications}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {activePage === "add" && (
          <ApplicationForm
            onSave={handleSave}
            editingApplication={editingApplication}
          />
        )}
      </main>
    </div>
  );
}

export default App;
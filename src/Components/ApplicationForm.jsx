import { useEffect, useState } from "react";

function ApplicationForm({ onSave, editingApplication }) {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    type: "Internship",
    location: "",
    date: new Date().toISOString().split("T")[0],
    deadline: "",
    status: "Applied"
  });

  useEffect(() => {
    if (editingApplication) {
      setFormData(editingApplication);
    }
  }, [editingApplication]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(formData);
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2>
          {editingApplication ? "Edit Application" : "Add New Application"}
        </h2>
        <p>Keep track of your job and internship opportunities.</p>
      </div>

      <div className="form-grid">
        <label>
          Company Name
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Google"
            required
          />
        </label>

        <label>
          Job Title
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. React Developer"
            required
          />
        </label>

        <label>
          Application Type
          <select name="type" value={formData.type} onChange={handleChange}>
            <option>Internship</option>
            <option>Full-time Job</option>
            <option>Part-time Job</option>
            <option>Contract</option>
          </select>
        </label>

        <label>
          Location
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Harare or Remote"
          />
        </label>

        <label>
          Application Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Application Deadline
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </label>

        <label>
          Application Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </label>
      </div>

      <button className="primary-button" type="submit">
        {editingApplication ? "Update Application" : "Save Application"}
      </button>
    </form>
  );
}

export default ApplicationForm;
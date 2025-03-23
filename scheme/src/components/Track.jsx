import React, { useEffect, useState } from "react";

const Track = () => {
  const [applications, setApplications] = useState([]);

  const loadApplications = () => {
    const storedTrackedApps =
      JSON.parse(localStorage.getItem("trackedForms")) || [];
    setApplications(storedTrackedApps);
  };

  useEffect(() => {
    loadApplications();

    // Listen for storage updates
    const handleStorageChange = () => {
      loadApplications();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Track Your Application</h2>
      {applications.length === 0 ? (
        <p className="text-center mt-4">No applications submitted yet.</p>
      ) : (
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Scholarship Amount</th>
              <th>Education Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{app.fullName}</td>
                <td>{app.phone}</td>
                <td>{app.scholarshipAmount}</td>
                <td>{app.educationLevel}</td>
                <td>
                  <span
                    className={`badge ${
                      app.status.includes("Approved")
                        ? "bg-success"
                        : "bg-warning"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Track;

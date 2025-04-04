import React, { useState, useEffect } from "react";

const ValidateApplications = () => {
  const [applications, setApplications] = useState([]);
  const [currentRole, setCurrentRole] = useState("JE");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("pendingForms")) || [];
    const role = localStorage.getItem("userRole") || "JE";
    setCurrentRole(role);

    // Filter applications based on user role
    const filteredApps = storedApps.filter((app) => {
      if (role === "JE") return app.status === "Pending JE Validation";
      if (role === "AE") return app.status === "Pending AE Validation";
      if (role === "EE") return app.status === "Pending EE Approval";
      return false;
    });

    setApplications(filteredApps);
  }, []);

  const updateApplicationStatus = (aadhaarNumber, newStatus) => {
    let pendingApps = JSON.parse(localStorage.getItem("pendingForms")) || [];
    let trackedApps = JSON.parse(localStorage.getItem("trackedForms")) || [];

    // Find the application
    const appToUpdate = pendingApps.find(
      (app) => app.aadhaarNumber === aadhaarNumber
    );

    if (!appToUpdate) return;

    // Update status
    appToUpdate.status = newStatus;

    // Move to trackedForms if not already present
    const existsInTracked = trackedApps.some(
      (app) => app.aadhaarNumber === aadhaarNumber
    );
    if (!existsInTracked) {
      trackedApps.push(appToUpdate);
    } else {
      // Update the status in trackedForms too
      trackedApps = trackedApps.map((app) =>
        app.aadhaarNumber === aadhaarNumber
          ? { ...app, status: newStatus }
          : app
      );
    }

    // Save changes
    localStorage.setItem("pendingForms", JSON.stringify(pendingApps));
    localStorage.setItem("trackedForms", JSON.stringify(trackedApps));

    // Update UI
    setApplications(
      pendingApps.filter((app) => {
        if (currentRole === "JE") return app.status === "Pending JE Validation";
        if (currentRole === "AE") return app.status === "Pending AE Validation";
        if (currentRole === "EE") return app.status === "Pending EE Approval";
        return false;
      })
    );

    // 🔥 Trigger event to update `Track.jsx`
    window.dispatchEvent(new Event("storage"));
  };

  const handleFinalDecision = (aadhaarNumber, decision) => {
    let pendingApps = JSON.parse(localStorage.getItem("pendingForms")) || [];
    let trackedApps = JSON.parse(localStorage.getItem("trackedForms")) || [];

    // Find the application
    const appToUpdate = pendingApps.find(
      (app) => app.aadhaarNumber === aadhaarNumber
    );
    if (!appToUpdate) return;

    // Remove the application from pendingForms
    pendingApps = pendingApps.filter(
      (app) => app.aadhaarNumber !== aadhaarNumber
    );
    localStorage.setItem("pendingForms", JSON.stringify(pendingApps));

    // Update status in trackedForms
    appToUpdate.status =
      decision === "approve" ? "Approved by EE" : "Rejected by EE";
    trackedApps = trackedApps.map((app) =>
      app.aadhaarNumber === aadhaarNumber
        ? { ...app, status: appToUpdate.status }
        : app
    );

    localStorage.setItem("trackedForms", JSON.stringify(trackedApps));

    // Update UI
    setApplications(
      pendingApps.filter((app) => app.status === "Pending EE Approval")
    );

    // 🔥 Trigger event so `Track.jsx` updates
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Application Validation</h2>

      {applications.length === 0 ? (
        <p className="text-center text-muted">No pending applications.</p>
      ) : (
        applications.map((app, index) => (
          <div key={index} className="card p-4 shadow-lg mb-3">
            {/* Personal Details */}
            <h4 className="text-primary">Personal Details</h4>
            <p>
              <strong>Full Name:</strong> {app.fullName}
            </p>
            <p>
              <strong>Father's Name:</strong> {app.fatherName}
            </p>
            <p>
              <strong>Mother's Name:</strong> {app.motherName}
            </p>

            {/* Contact & Address */}
            <h4 className="text-primary mt-3">Contact & Address</h4>
            <p>
              <strong>Phone Number:</strong> {app.phone}
            </p>
            <p>
              <strong>Alternate Phone Number:</strong> {app.alternatePhone}
            </p>
            <p>
              <strong>Emergency Contact:</strong> {app.emergencyContact}
            </p>

            {/* Identity Verification */}
            <h4 className="text-primary mt-3">Identity Verification</h4>
            <p>
              <strong>Aadhaar Number:</strong> {app.aadhaarNumber}
            </p>
            <p>
              <strong>PAN Card Number:</strong> {app.panCardNumber}
            </p>

            {/* Education & Scholarship */}
            <h4 className="text-primary mt-3">Education & Scholarship</h4>
            <p>
              <strong>Education Level:</strong> {app.educationLevel}
            </p>
            <p>
              <strong>Previous Year Marks (%):</strong> {app.previousMarks}
            </p>
            <p>
              <strong>Scholarship Amount Requested:</strong>{" "}
              {app.scholarshipAmount}
            </p>

            {/* Bank Details */}
            <h4 className="text-primary mt-3">Bank Details</h4>
            <p>
              <strong>Bank Name:</strong> {app.bankName}
            </p>

            {/* Hostel Facility */}
            <h4 className="text-primary mt-3">Hostel Facility</h4>
            <p>
              <strong>Do you need hostel facility?</strong>{" "}
              {app.hostelFacility ? "Yes" : "No"}
            </p>

            {/* Action Buttons */}
            <div className="text-center mt-3">
              {currentRole === "JE" && (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    updateApplicationStatus(
                      app.aadhaarNumber,
                      "Pending AE Validation"
                    )
                  }
                >
                  Approve & Send to AE
                </button>
              )}
              {currentRole === "AE" && (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    updateApplicationStatus(
                      app.aadhaarNumber,
                      "Pending EE Approval"
                    )
                  }
                >
                  Approve & Send to EE
                </button>
              )}
              {currentRole === "EE" && (
                <>
                  <button
                    className="btn btn-success me-3"
                    onClick={() =>
                      handleFinalDecision(app.aadhaarNumber, "approve")
                    }
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      handleFinalDecision(app.aadhaarNumber, "reject")
                    }
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ValidateApplications;

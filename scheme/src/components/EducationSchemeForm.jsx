import React, { useState } from "react";
import digilockerLogo from "./digilocker.png";
import aadhaarLogo from "./aadhaar.png";
import { useNavigate } from "react-router-dom";

const EducationSchemeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    phone: "",
    alternatePhone: "",
    emergencyContact: "",
    aadhaarNumber: "",
    panCardNumber: "",
    educationLevel: "",
    previousMarks: "",
    scholarshipAmount: "",
    bankName: "",
    hostelRequired: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingForms =
      JSON.parse(localStorage.getItem("pendingForms")) || [];
    const newApplication = { ...formData, status: "Pending JE Validation" };
    localStorage.setItem(
      "pendingForms",
      JSON.stringify([...existingForms, newApplication])
    );

    // Send to Track.jsx storage
    const trackedForms = JSON.parse(localStorage.getItem("trackedForms")) || [];
    localStorage.setItem(
      "trackedForms",
      JSON.stringify([...trackedForms, newApplication])
    );

    alert("Form submitted successfully!");
    navigate("/schemes");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDigiLockerLogin = () => {
    setFormData((prev) => ({
      ...prev,
      fullName: "Aman Gawas",
      dob: "1998-05-21",
      fatherName: "Suresh Gawas",
      motherName: "Neha Gawas",
      gender: "Male",
      phone: "9876543210",
    }));
  };

  const handleAadhaarLogin = () => {
    setFormData((prev) => ({
      ...prev,
      fullName: "Rahul Naik",
      fatherName: "Vaman Naik",
      motherName: "Sneha Naik",
      dob: "1998-05-21",
      gender: "Male",
      phone: "9876543210",
      aadhaarNumber: "1234-5678-9012",
    }));
  };

  return (
    <div className="container mt-5">
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-outline-primary me-3"
          onClick={handleDigiLockerLogin}
        >
          <img
            src={digilockerLogo}
            alt="DigiLocker"
            width="30"
            className="me-2"
          />
          Login with DigiLocker
        </button>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleAadhaarLogin}
        >
          <img src={aadhaarLogo} alt="Aadhaar" width="30" className="me-2" />
          Login with Aadhaar
        </button>
      </div>

      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Education Scheme Application</h2>

        <form className="border p-4 rounded" onSubmit={handleSubmit}>
          <h4 className="text-primary">Personal Details</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Father's Name</label>
            <input
              type="text"
              className="form-control"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mother's Name</label>
            <input
              type="text"
              className="form-control"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </div>

          <h4 className="text-primary mt-4">Contact & Address</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Alternate Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Emergency Contact</label>
            <input
              type="tel"
              className="form-control"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
            />
          </div>

          <h4 className="text-primary mt-4">Identity Verification</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">Aadhaar Number</label>
            <input
              type="text"
              className="form-control"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">PAN Card Number</label>
            <input
              type="text"
              className="form-control"
              name="panCardNumber"
              value={formData.panCardNumber}
              onChange={handleChange}
            />
          </div>

          <h4 className="text-primary mt-4">Education & Scholarship</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">Education Level</label>
            <input
              type="text"
              className="form-control"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Previous Year Marks (%)
            </label>
            <input
              type="number"
              className="form-control"
              name="previousMarks"
              value={formData.previousMarks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Scholarship Amount Requested
            </label>
            <input
              type="number"
              className="form-control"
              name="scholarshipAmount"
              value={formData.scholarshipAmount}
              onChange={handleChange}
              required
            />
          </div>

          <h4 className="text-primary mt-4">Bank Details</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">Bank Name</label>
            <input
              type="text"
              className="form-control"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
            />
          </div>

          <h4 className="text-primary mt-4">Hostel Facility</h4>
          <div className="mb-3">
            <label className="form-label fw-bold">
              Do you need hostel facility?
            </label>
            <select
              className="form-control"
              name="hostelRequired"
              value={formData.hostelRequired}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success btn-lg">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationSchemeForm;

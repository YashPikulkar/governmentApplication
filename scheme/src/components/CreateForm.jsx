import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();
  const [schemeName, setSchemeName] = useState("");
  const [benefits, setBenefits] = useState("");
  const [criteria, setCriteria] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [incomeLimit, setIncomeLimit] = useState("");
  const [formFields, setFormFields] = useState([
    { label: "Full Name", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "Gender", type: "radio", options: ["Male", "Female", "Other"] },
    { label: "Annual Income", type: "number" },
  ]);

  // Add New Field
  const addField = () => {
    const newField = { label: "New Field", type: "text" };
    setFormFields([...formFields, newField]);
  };

  // Remove Field
  const removeField = (index) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    setFormFields(updatedFields);
  };

  // Update Field Label
  const updateLabel = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index].label = value;
    setFormFields(updatedFields);
  };

  // Change Field Type
  const changeType = (index, type) => {
    const updatedFields = [...formFields];
    updatedFields[index].type = type;
    setFormFields(updatedFields);
  };

  // Save Scheme
  const handleSubmit = (e) => {
    e.preventDefault();
    const newScheme = {
      schemeName,
      benefits,
      criteria,
      ageLimit,
      incomeLimit,
      formFields,
    };
    const existingSchemes = JSON.parse(localStorage.getItem("schemes")) || [];
    existingSchemes.push(newScheme);
    localStorage.setItem("schemes", JSON.stringify(existingSchemes));
    alert("Scheme Created Successfully!");
    navigate("/schemes");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary">Create a New Scheme</h2>
        <form onSubmit={handleSubmit}>
          {/* Scheme Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Scheme Name</label>
            <input
              type="text"
              className="form-control"
              value={schemeName}
              onChange={(e) => setSchemeName(e.target.value)}
              required
            />
          </div>

          {/* Benefits */}
          <div className="mb-3">
            <label className="form-label fw-bold">Benefits</label>
            <textarea
              className="form-control"
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
              required
            />
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-3">
            <label className="form-label fw-bold">Eligibility Criteria</label>
            <textarea
              className="form-control"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              required
            />
          </div>

          {/* Age Limit */}
          <div className="mb-3">
            <label className="form-label fw-bold">Age Limit</label>
            <input
              type="number"
              className="form-control"
              value={ageLimit}
              onChange={(e) => setAgeLimit(e.target.value)}
              required
            />
          </div>

          {/* Income Limit */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Income Limit (Annual ₹)
            </label>
            <input
              type="number"
              className="form-control"
              value={incomeLimit}
              onChange={(e) => setIncomeLimit(e.target.value)}
              required
            />
          </div>

          <hr />

          {/* Customizable Form Fields */}
          <h4 className="text-secondary">Customize Application Form</h4>
          {formFields.map((field, index) => (
            <div key={index} className="mb-3 row">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  value={field.label}
                  onChange={(e) => updateLabel(index, e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={field.type}
                  onChange={(e) => changeType(index, e.target.value)}
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                  <option value="radio">Radio (Yes/No)</option>
                </select>
              </div>
              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeField(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn btn-outline-secondary mb-3"
            onClick={addField}
          >
            + Add Field
          </button>

          <button type="submit" className="btn btn-primary w-100">
            Create Scheme
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

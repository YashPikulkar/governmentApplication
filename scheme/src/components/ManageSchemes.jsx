import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./Schemes.module.css"; // Reusing styles

const ManageSchemes = () => {
  const predefinedSchemes = [
    {
      schemeName: "Education Support Scheme",
      altSchemeName: "Student Aid Program",
      benefits: "Provides financial aid for students.",
      criteria: "Must be enrolled in a recognized institution.",
      ageLimit: "18-25",
      incomeLimit: "500000",
    },
    {
      schemeName: "Health Assistance Plan",
      altSchemeName: "Medical Aid Scheme",
      benefits: "Covers medical expenses up to ₹1,00,000.",
      criteria: "Must have an annual income below ₹3,00,000.",
      ageLimit: "No age limit",
      incomeLimit: "300000",
    },
    {
      schemeName: "Women Empowerment Fund",
      altSchemeName: "Business Support for Women",
      benefits: "Financial aid for women entrepreneurs.",
      criteria: "Only for women starting a business.",
      ageLimit: "21-45",
      incomeLimit: "800000",
    },
    {
      schemeName: "Senior Citizen Welfare Scheme",
      altSchemeName: "Pension Support",
      benefits: "Provides pension and financial security for senior citizens.",
      criteria: "Must be above 60 years of age.",
      ageLimit: "60+",
      incomeLimit: "No limit",
    },
    {
      schemeName: "Startup India Initiative",
      altSchemeName: "Entrepreneur Grant",
      benefits: "Government funding for startups.",
      criteria: "Must be a registered startup under Startup India program.",
      ageLimit: "18-50",
      incomeLimit: "No limit",
    },
  ];

  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const storedSchemes = JSON.parse(localStorage.getItem("schemes")) || [];
    setSchemes([...predefinedSchemes, ...storedSchemes]);
  }, []);

  const handleDelete = (schemeName) => {
    if (window.confirm(`Are you sure you want to delete "${schemeName}"?`)) {
      const updatedSchemes = schemes.filter(
        (scheme) => scheme.schemeName !== schemeName
      );
      setSchemes(updatedSchemes);
      localStorage.setItem("schemes", JSON.stringify(updatedSchemes));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Schemes</h2>
      <div className="row">
        {schemes.length === 0 ? (
          <p className="text-center">No schemes available.</p>
        ) : (
          schemes.map((scheme, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`card shadow-sm ${styles.schemeCard}`}>
                <div className="card-body">
                  <h5 className={styles.schemeTitle}>{scheme.schemeName}</h5>
                  {scheme.altSchemeName && (
                    <p className="text-muted small">({scheme.altSchemeName})</p>
                  )}
                  <p>
                    <strong>Benefits:</strong> {scheme.benefits}
                  </p>
                  <p>
                    <strong>Criteria:</strong> {scheme.criteria}
                  </p>
                  <p>
                    <strong>Age Limit:</strong> {scheme.ageLimit} years
                  </p>
                  <p>
                    <strong>Income Limit:</strong> ₹{scheme.incomeLimit}
                  </p>
                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => handleDelete(scheme.schemeName)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageSchemes;

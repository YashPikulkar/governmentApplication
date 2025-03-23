import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css"; // Keep old design

const AdminLogin = () => {
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (designation) {
      localStorage.setItem("userRole", designation); // 🔹 Fix: Changed key to "userRole"
      navigate("/admin"); // Redirect to Admin Panel
    } else {
      alert("Please select your designation.");
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={`${styles.adminCard} card`}>
        <div className="card-body">
          <h2 className="card-title text-center">Admin Login</h2>

          <form onSubmit={handleLogin}>
            <div className="form-outline mb-3">
              <label className="form-label">Select Designation</label>
              <select
                className="form-control"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                <option value="JE">Junior Engineer (JE)</option>
                <option value="AE">Assistant Engineer (AE)</option>
                <option value="EE">Executive Engineer (EE)</option>
              </select>
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password (Optional)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="text-center text-muted">
              Login without a password (MVP Mode).
            </p>

            <div className={`${styles.forgotPassword} text-center`}>
              <a href="#!">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

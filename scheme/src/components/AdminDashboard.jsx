import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminDashboard.module.css";
import schemeImage from "../assets/create.png";
import validateImage from "../assets/validate.png";
import usersImage from "../assets/users.png";
import manageImage from "../assets/manage.png"; // ✅ New image for Manage Schemes

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminRole = localStorage.getItem("userRole"); // 🔹 Fix: Use "userRole" instead of "admin"

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/admin-login"); // Redirect to login page
  };

  return (
    <div className={styles.adminContainer}>
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className={`container ${styles.cardContainer}`}>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className={`card text-center shadow-sm ${styles.adminCard}`}>
              <img
                src={schemeImage}
                className="card-img-top"
                alt="Create Scheme"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Create Scheme</h5>
                <p className="card-text">Add new schemes for applicants.</p>
                <div className="mt-auto">
                  {adminRole === "EE" ? (
                    <button
                      onClick={() => navigate("/create-scheme")}
                      className="btn btn-primary btn-lg"
                    >
                      Create Scheme
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-lg" disabled>
                      Only EE can access
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`card text-center shadow-sm ${styles.adminCard}`}>
              <img
                src={validateImage}
                className="card-img-top"
                alt="Validate Applications"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Validate Applications</h5>
                <p className="card-text">
                  Review, approve, or reject applications.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => navigate("/validate-applications")}
                    className="btn btn-success btn-lg"
                  >
                    Validate Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`card text-center shadow-sm ${styles.adminCard}`}>
              <img
                src={usersImage}
                className="card-img-top"
                alt="Manage Users"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Manage Users</h5>
                <p className="card-text">Add, remove, or update user roles.</p>
                <div className="mt-auto">
                  {adminRole === "EE" ? (
                    <button
                      onClick={() => navigate("/manage-users")}
                      className="btn btn-warning btn-lg"
                    >
                      Manage Users
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-lg" disabled>
                      Only EE can access
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`card text-center shadow-sm ${styles.adminCard}`}>
              <img
                src={manageImage}
                className="card-img-top"
                alt="Manage Schemes"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Manage Schemes</h5>
                <p className="card-text">View, edit, or remove schemes.</p>
                <div className="mt-auto">
                  {adminRole === "EE" ? (
                    <button
                      onClick={() => navigate("/manage-schemes")}
                      className="btn btn-dark btn-lg"
                    >
                      Manage Schemes
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-lg" disabled>
                      Only EE can access
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handleLogout}
          className={`btn btn-danger btn-lg ${styles.logoutBtn}`}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

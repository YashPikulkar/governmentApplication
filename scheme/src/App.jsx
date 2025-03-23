import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Schemes from "./components/Schemes";
import Track from "./components/Track";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import FAQs from "./components/FAQs";
import CreateForm from "./components/CreateForm"; // New Component
import ValidateApplications from "./components/ValidateApplications"; // New Component
import ManageUsers from "./components/ManageUsers"; // New Component
import AppProvider from "./context/AppContext"; // Context Provider
import RaiseTicket from "./components/RaiseTicket";
import AccessibilityBar from "./components/AccessibilityBar";
import ManageSchemes from "./components/ManageSchemes"; // ✅ Import ManageSchemes
import EducationSchemeForm from "./components/EducationSchemeForm";

// ✅ Protected Route for Admin Pages
const ProtectedAdminRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("userRole"); // 🔹 Fix: Use correct key
  return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AccessibilityBar />
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/track" element={<Track />} />
          <Route path="/raise-ticket" element={<RaiseTicket />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/create-scheme"
            element={
              <ProtectedAdminRoute>
                <CreateForm />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/validate-applications"
            element={
              <ProtectedAdminRoute>
                <ValidateApplications />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/manage-users"
            element={
              <ProtectedAdminRoute>
                <ManageUsers />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/manage-schemes"
            element={
              <ProtectedAdminRoute>
                <ManageSchemes />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/apply/education" element={<EducationSchemeForm />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;

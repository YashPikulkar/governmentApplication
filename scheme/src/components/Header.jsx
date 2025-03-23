import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListAlt,
  FaClipboardCheck,
  FaUserShield,
  FaTicketAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Logo path remains the same

const Header = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-light px-2 py-2 d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      {/* Logo - Increased Size */}
      <div className="header-emblem d-flex align-items-center">
        <img
          src={logo}
          alt="National Portal of India"
          style={{ maxWidth: "250px", height: "auto" }} // Increased size
        />
      </div>

      {/* Navigation Links */}
      <ul className="nav ms-auto d-flex flex-wrap">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "fw-bold text-primary" : ""
            }`}
          >
            <FaHome className="me-1" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/schemes"
            className={`nav-link ${
              location.pathname === "/schemes" ? "fw-bold text-primary" : ""
            }`}
          >
            <FaListAlt className="me-1" /> Schemes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/track"
            className={`nav-link ${
              location.pathname === "/track" ? "fw-bold text-primary" : ""
            }`}
          >
            <FaClipboardCheck className="me-1" /> Track Status
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin"
            className={`nav-link ${
              location.pathname === "/admin" ? "fw-bold text-primary" : ""
            }`}
          >
            <FaUserShield className="me-1" /> Admin Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/raise-ticket"
            className={`nav-link ${
              location.pathname === "/raise-ticket"
                ? "fw-bold text-primary"
                : ""
            }`}
          >
            <FaTicketAlt className="me-1" /> Raise Ticket
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

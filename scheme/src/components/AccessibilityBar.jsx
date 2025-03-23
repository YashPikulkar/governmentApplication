import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AccessibilityBar = () => {
  const [fontSize, setFontSize] = useState(16);
  const navigate = useNavigate();

  // Font Size Handlers
  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const resetFontSize = () => setFontSize(16);

  return (
    <div className="d-flex align-items-center justify-content-between p-2 bg-light text-dark border-bottom">
      {/* Skip to Main Content (Navigates to Schemes) */}
      <button
        className="btn btn-sm btn-primary me-auto"
        onClick={() => navigate("/schemes")}
      >
        Skip to Main Content
      </button>

      {/* Font Size Controls */}
      <div className="d-flex align-items-center">
        <button
          className="btn btn-sm btn-outline-secondary me-1"
          onClick={decreaseFontSize}
        >
          -A
        </button>
        <button
          className="btn btn-sm btn-outline-secondary me-1"
          onClick={resetFontSize}
        >
          A
        </button>
        <button
          className="btn btn-sm btn-outline-secondary me-3"
          onClick={increaseFontSize}
        >
          +A
        </button>

        {/* Language Switch Button */}
        <button className="btn btn-sm btn-warning">हिन्दी</button>
      </div>

      {/* Apply Dynamic Font Size */}
      <style>{`
        body { font-size: ${fontSize}px; }
      `}</style>
    </div>
  );
};

export default AccessibilityBar;

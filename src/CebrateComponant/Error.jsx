import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">🔍</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link to="/courses" className="error-button">
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
}
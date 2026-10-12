import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import './AllProjects.css'

function AllProjects() {
  return (
    <section className="error-page">
      <div className="error-container">
        <div className="error-status">
          <Terminal size={16} />
          <span>JLS.ERR / SYSTEM STATUS</span>
        </div>

        <div className="error-code">404</div>

        <div className="error-line">
          <span></span>
        </div>

        <h1 className="error-heading">
          Page <span>Not Found.</span>
        </h1>

        <p className="error-description">
          Oops! This page is currently under development.
          More exciting projects are coming soon.
          Stay tuned!
        </p>

        <div className="error-actions">
          <Link to="/" className="error-btn">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        <p className="error-footer">
          ERROR 404 / JLS.ERR PORTFOLIO
        </p>
      </div>
    </section>
  );
}

export default AllProjects;
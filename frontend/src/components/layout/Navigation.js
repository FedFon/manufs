/**
 * File: Navigation.js
 * Author: Fedfon
 * Purpose: This hold the Navigation Bar component that will displayed to the client at all times.
 */
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-xl bg-secondary navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item">
                <i
                  className=" navbar-brand bi bi-eye me-2"
                  style={{ fontSize: "35px" }}
                >
                  MANU
                </i>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/patient">
                  Register a patient
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Patient List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

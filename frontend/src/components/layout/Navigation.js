import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div></div>
      <nav className="navbar navbar-expand-xl bg-secondary navbar-dark">
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
            <li>
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
            <li className="nav-item">
              <Link className="nav-link" to="/edit">
                Edit a Patient
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

/**
 * 
 * 
        
        
 */

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div>
        <i className="bi bi-heart-fill me-2 text-color: text-danger"></i>MANU
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/patient">Register a patient</Link>
          </li>
          <li>
            <Link to="/list">Patient List</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

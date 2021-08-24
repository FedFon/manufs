import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div>MANU</div>
      <nav>
        <ul>
          <li>
            <Link to="/patient">Register a patient</Link>
          </li>
          <li>
            <Link to="/list">Patient List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

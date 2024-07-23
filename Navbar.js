import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/">
          <h4>
            <GoChevronLeft />
            Home
          </h4>
        </Link>
      </div>
    </nav>
  );
}

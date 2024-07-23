import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";

export default function BottomNav() {
  return (
    <nav className="bottomnavbar">
      <Link to="/create">
        <h3>
          <GoPencil /> New Note
        </h3>
      </Link>
    </nav>
  );
}

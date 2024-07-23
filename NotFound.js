import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Oops! That page cannot be found.</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

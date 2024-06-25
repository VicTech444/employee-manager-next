import { Link } from "react-router-dom";

export default function NormalUserNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

import { BrowserRouter as useLocation, Link } from "react-router-dom";
import logo from "../3.png";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h3>
        <img
          src={logo}
          style={{ margin: "auto", display: "block", width: "50%" }}
        />
      </h3>
      <button
        style={{
          textDecoration: "none",
          margin: "auto",
          display: "flex",
          padding: "1%",
          color: "with",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          go back <code>{location.pathname}</code>
        </Link>
      </button>
    </div>
  );
}

export default NotFound;

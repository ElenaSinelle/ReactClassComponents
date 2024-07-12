import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notFound">
      <h2 className="notFound__404">404</h2>
      <p className="notFound__title">
        This page does not exist
      </p>

      <Link className="notFound__homeLink" to="/">
        {" "}
        Go to Home Page
      </Link>
    </div>
  );
}

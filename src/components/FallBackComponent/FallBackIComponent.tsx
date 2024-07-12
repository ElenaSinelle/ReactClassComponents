// import { Link } from "react-router-dom";
import "./FallBackComponent.css";

const FallBackComponent: React.FC = () => {
  return (
    <div className="fallBack">
      <p className="fallBack__message">
        Something went wrong
      </p>
      {/* <button onClick={() => history.go(0)}>Reset</button> */}
      {/* <Link className="fallBack__homeLink" to="/">
        {" "}
        Go to Home Page
      </Link> */}
    </div>
  );
};

export default FallBackComponent;

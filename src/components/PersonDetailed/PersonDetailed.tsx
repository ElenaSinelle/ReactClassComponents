import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import "./PersonDetailed.css";
import "../../index.css";
import { useTheme } from "../../contexts/useTheme";
import { useGetPersonQuery } from "../../services/peopleApi";

const PersonDetailed: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = searchParams.get("details") || "";
  const currentPage = searchParams.get("page") || "1";
  const { theme } = useTheme();

  const { data, error, isLoading } =
    useGetPersonQuery(name);

  const handleCloseDetails = () => {
    navigate(`/?page=${currentPage}`);
  };

  return (
    <div className="person">
      {isLoading ? (
        <p>Loading details...</p>
      ) : error ? (
        <p>Error loading details</p>
      ) : data?.results.length ? (
        <div className="person__details">
          <div className="name">
            Name: {data.results[0].name}
          </div>
          <div className="gender">
            Gender: {data.results[0].gender}
          </div>
          <div className="birthYear">
            Date of Birth: {data.results[0].birth_year}
          </div>
          <button
            className={theme}
            onClick={handleCloseDetails}
          >
            Close Details
          </button>
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default PersonDetailed;

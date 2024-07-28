import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./Results.css";
import PersonGeneral from "../PersonGeneral/PersonGeneral";
import { ResultsProps } from "./Results.types";

const Results: React.FC<ResultsProps> = ({
  people = [],
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";

  const handleShowDetails = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    personName: string,
  ) => {
    event.stopPropagation();
    navigate(`/?page=${currentPage}&details=${personName}`);
  };

  return (
    <div className="people">
      {people.length ? (
        people.map(person => (
          <PersonGeneral
            key={person.name}
            person={person}
            handleShowDetails={(event, name) =>
              handleShowDetails(event, name)
            }
          />
        ))
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export default Results;

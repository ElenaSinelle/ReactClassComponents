import React, { useEffect, useState } from "react";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import "./PersonDetailed.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

const PersonDetailed: React.FC = () => {
  const [person, setPerson] = useState<PersonData | null>(
    null,
  );
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = searchParams.get("details");
  const currentPage = searchParams.get("page");

  useEffect(() => {
    if (name) {
      setIsLoading(true);
      fetch(
        `https://swapi.py4e.com/api/people/?search=${name}`,
      )
        .then(response => response.json())
        .then(data => {
          setPerson(data.results[0] || null);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Error fetching details:", error);
          setIsLoading(false);
        });
    }
  }, [name]);

  const handleCloseDetails = () => {
    navigate(`/?page=${currentPage}`);
  };

  return (
    <div className="personDetails">
      {isLoading ? (
        <p>Loading details...</p>
      ) : person ? (
        <div className="person">
          <div className="name">Name: {person.name}</div>
          <div className="gender">
            Gender: {person.gender}
          </div>
          <div className="birthYear">
            Date of Birth: {person.birth_year}
          </div>
          <button onClick={handleCloseDetails}>
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

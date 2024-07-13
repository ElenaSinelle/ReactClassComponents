import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Main.css";
import Search from "../Search/Search";
import Results from "../Results/Results";
import PersonDetailed from "../PersonDetailed/PersonDetailed";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

const Main: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [people, setPeople] = useState<PersonData[]>([]);
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(
    searchParams.get("page") || "1",
    10,
  );

  const detailsName = searchParams.get("details");

  const throwError = () => {
    setHasError(true);
  };

  if (hasError) throw new Error("Test Error");

  const fetchPeople = async (
    name: string,
    page: number = 1,
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/?search=${name}&page=${page}`,
      );
      const data = await response.json();
      setPeople(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const savedSearchedPerson = localStorage.getItem(
      "searchedPerson",
    );
    fetchPeople(savedSearchedPerson || "", currentPage);
  }, [currentPage]);

  const searchPerson = (name: string) => {
    localStorage.setItem("searchedPerson", name);
    setSearchParams({ page: "1" });
    fetchPeople(name, 1);
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  // const handleCloseDetails = () => {
  //   navigate("/");
  // };

  return (
    <div className="main">
      <section className="top">
        <Search searchPerson={searchPerson} />
      </section>

      <section className="bottom">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="bottom__content">
            <div
              className="bottom__content_left"
              // onClick={handleCloseDetails}
            >
              <Results people={people} />
              <div className="pagination">
                {currentPage > 1 && (
                  <button
                    onClick={() =>
                      handlePageChange(currentPage - 1)
                    }
                  >
                    Previous
                  </button>
                )}
                <span>Page {currentPage}</span>
                {currentPage < totalPages && (
                  <button
                    onClick={() =>
                      handlePageChange(currentPage + 1)
                    }
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
            {detailsName && (
              <div className="bottom__content_right">
                <PersonDetailed />
              </div>
            )}
          </div>
        )}

        <button
          className="errorBoundaryCheck"
          onClick={throwError}
        >
          Error Boundary Check
        </button>
      </section>
    </div>
  );
};

export default Main;

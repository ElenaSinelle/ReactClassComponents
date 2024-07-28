import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import "./MainPage.css";
import Search from "../Search/Search";
import Results from "../Results/Results";
import PersonDetailed from "../PersonDetailed/PersonDetailed";
import Pagination from "../Pagination/Pagination";
import ErrorCheckButton from "../ErrorBoundaryButton/ErrorBoundaryButton";
import SwitchMode from "../SwitchMode/SwitchMode";
import Flyout from "../Flyout/Flyout";
import { useTheme } from "../../contexts/useTheme";
import { useGetPeopleQuery } from "../../services/peopleApi";

const MainPage: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(
    searchParams.get("page") || "1",
    10,
  );
  const searchQuery = searchParams.get("search") || "";
  const detailsName = searchParams.get("details");

  const { data, error, isLoading } = useGetPeopleQuery({
    name: searchQuery,
    page: currentPage,
  });

  const handlePageChange = (
    newPage: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setSearchParams({
      page: newPage.toString(),
      search: searchQuery,
      details: detailsName || "",
    });
  };

  const searchPerson = (name: string) => {
    setSearchParams({ page: "1", search: name });
  };

  const handleCloseDetails = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = event.target as HTMLElement;
    if (
      target.tagName === "BUTTON" ||
      (target instanceof HTMLInputElement &&
        target.type === "checkbox")
    ) {
      return;
    }
    navigate(`/?page=${currentPage}`);
  };

  return (
    <div className="main">
      <section>
        <Search searchPerson={searchPerson} />
      </section>
      <section className={`bottom ${theme}`}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching data</p>
        ) : (
          <div className="bottom__content">
            <div
              className={
                !detailsName
                  ? "bottom__content_wide"
                  : "bottom__content_left"
              }
              onClick={handleCloseDetails}
            >
              <Results people={data?.results || []} />
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(
                  (data?.count || 1) / 10,
                )}
                handlePageChange={handlePageChange}
              />
            </div>
            {detailsName && <PersonDetailed />}
          </div>
        )}
        <div className="bottom__buttons">
          <ErrorCheckButton />
          <SwitchMode />
          <Flyout />
        </div>
      </section>
    </div>
  );
};

export default MainPage;

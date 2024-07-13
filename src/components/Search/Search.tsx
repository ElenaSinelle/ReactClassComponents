import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import "./Search.css";

interface SearchProps {
  searchPerson: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({
  searchPerson,
}) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const savedSearchedPerson = localStorage.getItem(
      "searchedPerson",
    );
    if (savedSearchedPerson) {
      setSearch(savedSearchedPerson);
    }
  }, []);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    searchPerson(trimmedSearch);
  };

  return (
    <form
      className="search"
      onSubmit={handleSearch}
      name="searchForm"
    >
      <input
        className="searchInput"
        placeholder="search by name"
        type="search"
        name="searchFormInput"
        value={search}
        onChange={handleInput}
      />

      <button
        className="searchButton"
        type="submit"
        name="searchFormButton"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

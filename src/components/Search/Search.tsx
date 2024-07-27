import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import "../../index.css";
import useLS from "../../hooks/useLS";
import { useTheme } from "../../contexts/useTheme";

interface SearchProps {
  searchPerson: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({
  searchPerson,
}) => {
  const { theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const [searchQuery] = useLS("searchedPerson");

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

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
      className={`search ${theme}`}
      onSubmit={handleSearch}
      name="searchForm"
    >
      <input
        placeholder="search by name"
        type="search"
        name="searchFormInput"
        value={search}
        onChange={handleInput}
      />

      <button
        className={theme}
        type="submit"
        name="searchFormButton"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

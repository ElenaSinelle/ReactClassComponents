import { Component, ChangeEvent, FormEvent } from "react";
import "./Search.css";

interface SearchProps {
  searchPerson: (name: string) => void;
}
interface SearchState {
  search: string;
}

export default class Search extends Component<
  SearchProps,
  SearchState
> {
  state: SearchState = {
    search: "",
  };

  componentDidMount() {
    const savedSearchedPerson = localStorage.getItem(
      "searchedPerson",
    );
    if (savedSearchedPerson) {
      this.setState({ search: savedSearchedPerson });
    }
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = this.state.search.trim();
    this.props.searchPerson(trimmedSearch);
  };

  render() {
    return (
      <form
        className="search"
        onSubmit={this.handleSearch}
        name="searchForm"
      >
        <input
          className="searchInput"
          placeholder="search by name"
          type="search"
          name="searchFormInput"
          value={this.state.search}
          onChange={this.handleInput}
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
  }
}

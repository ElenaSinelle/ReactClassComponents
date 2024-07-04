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
    this.setState({ search: e.target.value.trim() });
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.searchPerson(this.state.search);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSearch}>
        <input
          className="searchInput"
          placeholder="search"
          type="search"
          value={this.state.search}
          onChange={this.handleInput}
        />

        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    );
  }
}

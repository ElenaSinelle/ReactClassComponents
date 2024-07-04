import { Component } from "react";
import "./Search.css";

interface SearchProps {}
interface SearchState {}

export default class Search extends Component<
  SearchProps,
  SearchState
> {
  render() {
    return (
      <div className="search">
        <input />
        <label></label>
        <button></button>
      </div>
    );
  }
}

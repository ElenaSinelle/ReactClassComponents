import { Component } from "react";
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";
import "./MainPage.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface MainPageState {
  people: PersonData[];
  loading: boolean;
  error: string | null;
  checkingError: boolean;
}
export default class MainPage extends Component<
  Record<string, never>,
  MainPageState
> {
  state: MainPageState = {
    people: [],
    loading: true,
    error: null,
    checkingError: false,
  };

  componentDidMount() {
    const savedSearchedPerson = localStorage.getItem(
      "searchedPerson",
    );
    this.fetchPeople(savedSearchedPerson || "");
  }

  fetchPeople = async (name: string) => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/?search=${name}`,
      );
      const data = await response.json();
      this.setState({ people: data.results });
    } catch (err) {
      this.setState({ error: "Error fetching data" });
    } finally {
      this.setState({ loading: false });
    }
  };

  searchPerson = (name: string) => {
    localStorage.setItem("searchedPerson", name);
    this.fetchPeople(name);
  };

  errorCheck = (): void => {
    this.setState({ checkingError: true });
  };

  render() {
    if (this.state.checkingError) {
      throw new Error("Test Error");
    }

    return (
      <div className="mainPage">
        <section className="top">
          <Search searchPerson={this.searchPerson} />
        </section>

        <section className="bottom">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Results people={this.state.people} />
          )}

          <div className="errorBoundaryCheck">
            <button onClick={this.errorCheck}>
              Error Boundary Check
            </button>
          </div>
        </section>
      </div>
    );
  }
}

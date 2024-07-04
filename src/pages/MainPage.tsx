import { Component } from "react";
import "./MainPage.css";
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface MainPageState {
  people: PersonData[];
  loading: boolean;
  error: string | null;
}
export default class MainPage extends Component<MainPageState> {
  state = {
    people: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetch("https://swapi.py4e.com/api/people/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          people: data.results,
          loading: false,
          error: null,
        }),
      )
      .catch(err => {
        console.error(err);
        this.setState({
          loading: false,
          error: "Error fetching data",
        });
      });
  }

  searchPerson = async (name: string) => {
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

  render() {
    return (
      <div className="mainPage">
        <Search searchPerson={this.searchPerson} />
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <Results people={this.state.people} />
        )}
      </div>
    );
  }
}

import { Component } from "react";
import "./MainPage.css";
// import Search from "../components/Search/Search";
import Results from "../components/Results/Results";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface MainPageState {
  people: PersonData[];
  loading: boolean;
}
export default class MainPage extends Component<MainPageState> {
  state = {
    people: [],
    loading: true,
  };

  componentDidMount() {
    fetch("https://swapi.py4e.com/api/people/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          people: data.results,
          loading: false,
        }),
      )
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="mainPage">
        {/* <Search searchPeople={this.searchPeople} /> */}
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <Results people={this.state.people} />
        )}
      </div>
    );
  }
}

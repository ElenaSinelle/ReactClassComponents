import { Component } from "react";
import "./Results.css";
import Person from "../Person/Person";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}
interface ResultsProps {
  people: PersonData[];
}

interface ResultsState {}

export default class Results extends Component<
  ResultsProps,
  ResultsState
> {
  render() {
    const { people = [] } = this.props;

    return (
      <div className="people">
        {people.length ? (
          people.map(person => (
            <Person key={person.name} person={person} />
          ))
        ) : (
          <h4>Nothing found</h4>
        )}
      </div>
    );
  }
}

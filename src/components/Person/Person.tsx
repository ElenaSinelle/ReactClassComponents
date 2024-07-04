import { Component } from "react";
import "./Person.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface PersonProps {
  person: PersonData;
}

interface PersonState {}

export default class Person extends Component<
  PersonProps,
  PersonState
> {
  render() {
    const { person } = this.props;

    return (
      <div className="person">
        <div className="name">{person.name}</div>
        <div className="gender">{person.gender}</div>
        <div className="birthYear">{person.birth_year}</div>
      </div>
    );
  }
}

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

export default class Person extends Component<PersonProps> {
  render() {
    const { person } = this.props;

    return (
      <div className="person">
        <div className="name">Name: {person.name}</div>
        <div className="gender">
          Gender: {person.gender}
        </div>
        <div className="birthYear">
          Date of Birth: {person.birth_year}
        </div>
      </div>
    );
  }
}

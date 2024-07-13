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

const Results: React.FC<ResultsProps> = ({
  people = [],
}) => {
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
};

export default Results;

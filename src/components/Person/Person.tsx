import "./Person.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface PersonProps {
  person: PersonData;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  const { name, gender, birth_year } = person;
  return (
    <div className="person">
      <div className="name">Name: {name}</div>
      <div className="gender">Gender: {gender}</div>
      <div className="birthYear">
        Date of Birth: {birth_year}
      </div>
    </div>
  );
};

export default Person;

import "./PersonGeneral.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface PersonProps {
  person: PersonData;
  handleShowDetails: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    name: string,
  ) => void;
}

const PersonGeneral: React.FC<PersonProps> = ({
  person,
  handleShowDetails,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    handleShowDetails(event, person.name);
  };

  return (
    <div className="personGeneral" onClick={handleClick}>
      {person.name}
    </div>
  );
};

export default PersonGeneral;

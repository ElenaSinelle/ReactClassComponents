import "./PersonGeneral.css";
import { PersonProps } from "./PersonGeneral.types";

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

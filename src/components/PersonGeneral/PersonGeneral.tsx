import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPerson,
  unselectPerson,
  selectSelectedPeople,
} from "../../store/peopleSlice";
import { PersonProps } from "./PersonGeneral.types";
import "./PersonGeneral.css";

const PersonGeneral: React.FC<PersonProps> = ({
  person,
  handleShowDetails,
}) => {
  const dispatch = useDispatch();
  const selectedPeople = useSelector(selectSelectedPeople);
  const isSelected = selectedPeople
    .map(selectedPerson => selectedPerson.name)
    .includes(person.name);

  const handleToggle = () => {
    if (isSelected) {
      dispatch(unselectPerson(person));
    } else {
      dispatch(selectPerson(person));
    }
  };

  return (
    <div className="personGeneral">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleToggle}
      />
      <div
        className="personGeneral__name"
        onClick={event =>
          handleShowDetails(event, person.name)
        }
      >
        {person.name}
      </div>
    </div>
  );
};

export default PersonGeneral;

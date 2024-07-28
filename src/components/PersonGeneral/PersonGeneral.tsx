import "./PersonGeneral.css";
import { PersonProps } from "./PersonGeneral.types";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/stateHooks";
import { toggleItem } from "../../store/selectedItemsSlice";

const PersonGeneral: React.FC<PersonProps> = ({
  person,
  handleShowDetails,
}) => {
  const dispatch = useAppDispatch();
  const isSelected = useAppSelector(
    state => state.selectedItems[person.name],
  );

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    handleShowDetails(event, person.name);
  };

  const handleCheckboxChange = () => {
    dispatch(toggleItem(person.name));
  };

  return (
    <div className="personGeneral">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />

      <div
        className="personGeneral__name"
        onClick={handleClick}
      >
        {person.name}
      </div>
    </div>
  );
};

export default PersonGeneral;

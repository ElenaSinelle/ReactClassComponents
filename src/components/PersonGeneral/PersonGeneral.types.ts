import { PersonData } from "../../types/common.types";

export interface PersonProps {
  person: PersonData;
  handleShowDetails: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    name: string,
  ) => void;
}

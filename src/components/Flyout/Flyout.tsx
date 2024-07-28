import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  unselectAll,
  selectSelectedPeople,
} from "../../store/peopleSlice";
import "./Flyout.css";
import { saveAs } from "file-saver";
import { useTheme } from "../../contexts/useTheme";

const Flyout: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const selectedPeople = useSelector(selectSelectedPeople);
  const selectedCount = selectedPeople.length;

  if (selectedCount === 0) return null;

  const handleUnselectAll = () => {
    dispatch(unselectAll());
  };

  const handleDownload = () => {
    const csvContent = selectedPeople
      .map(
        person =>
          `${person.name}, ${person.gender}, ${person.birth_year}, ${person.url}`,
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const fileName =
      selectedCount === 1 ? "person" : "people";
    saveAs(blob, `${selectedCount}_${fileName}.csv`);
  };

  return (
    <div className={`flyout ${theme}`}>
      <p className="flyout__count">
        {selectedCount} items are selected
      </p>
      <button
        className={`flyout__button ${theme}`}
        onClick={handleUnselectAll}
      >
        Unselect all
      </button>
      <button
        className={`flyout__button ${theme}`}
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

export default Flyout;

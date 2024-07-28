import { useState } from "react";
import { useTheme } from "../../contexts/useTheme";

const ErrorCheckButton: React.FC = () => {
  const { theme } = useTheme();
  const [hasError, setHasError] = useState(false);
  const throwError = () => {
    setHasError(true);
  };

  if (hasError) throw new Error("Test Error");
  return (
    <button
      className={`errorBoundaryCheck ${theme}`}
      onClick={throwError}
    >
      Error Boundary Check
    </button>
  );
};

export default ErrorCheckButton;

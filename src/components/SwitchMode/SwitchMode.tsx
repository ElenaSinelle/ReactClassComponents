import { useTheme } from "../../contexts/useTheme";

const SwitchMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button className={theme} onClick={toggleTheme}>
        {theme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"}
      </button>
    </div>
  );
};

export default SwitchMode;

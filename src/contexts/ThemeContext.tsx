import { createContext, useState } from "react";

import {
  Theme,
  ThemeProviderProps,
  ThemeContextProps,
} from "./ThemeContext.types";

export const ThemeContext = createContext<
  ThemeContextProps | undefined
>(undefined);

export const ThemeProvider: React.FC<
  ThemeProviderProps
> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === "light" ? "dark" : "light",
    );
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

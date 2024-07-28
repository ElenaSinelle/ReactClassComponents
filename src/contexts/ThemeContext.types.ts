import { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

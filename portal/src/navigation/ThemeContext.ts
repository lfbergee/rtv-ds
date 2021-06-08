import { createContext } from "react";

export type themes = "rtv" | "strm";

export const ThemeContext = createContext<{
  theme: themes;
  setTheme?: (nextTheme: themes) => void;
}>({ theme: "rtv" });

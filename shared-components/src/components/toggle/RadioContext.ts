import { createContext } from "react";

export const RadioContext = createContext<{ radioName: string }>({ radioName: "" });

import React, { createContext, useEffect, useState } from "react";
import {
  ThemeContextType,
  ThemeOptionsType,
  ThemeProviderType,
} from "./themeContext.types";

export const ThemeContext = createContext<ThemeContextType>({
  themeOption: ThemeOptionsType.light,
  setThemeOption: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
  const [themeOption, setThemeOption] = useState<ThemeOptionsType>(
    ThemeOptionsType.light
  );

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.dataset.theme = themeOption;
    }
  }, [themeOption]);

  const contextState: ThemeContextType = {
    themeOption,
    setThemeOption,
  };

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
};

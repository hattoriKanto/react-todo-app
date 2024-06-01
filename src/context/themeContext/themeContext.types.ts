import React from "react";

export enum ThemeOptionsType {
  light = "light",
  dark = "dark",
}

export interface ThemeContextType {
  themeOption: ThemeOptionsType;
  setThemeOption: React.Dispatch<React.SetStateAction<ThemeOptionsType>>;
}

export interface ThemeProviderType {
  children: React.ReactNode;
}

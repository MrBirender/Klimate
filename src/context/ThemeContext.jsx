import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const  localTheme = localStorage.getItem('theme') || 'system'
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem('theme', "dark")
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem('theme', "light")
    } else {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", isDarkMode);
      localStorage.setItem('theme', 'system')
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

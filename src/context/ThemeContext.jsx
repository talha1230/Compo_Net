import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * @typedef {Object} ThemeContextProps
 * @property {string} theme
 * @property {() => void} toggleTheme
 */

/** @type {React.Context<ThemeContextProps | undefined>} */
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Get the initial theme from local storage or default to 'light'
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default to 'light' if localStorage is not available
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Save the theme to local storage whenever it changes
      console.log("Saving theme to local storage:", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("Toggling theme:", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
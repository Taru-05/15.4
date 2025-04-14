// ThemeToggle.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

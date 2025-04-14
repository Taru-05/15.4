// App.js
import React, { useEffect, useContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import ThemeContext from "./ThemeContext";
import "./App.css";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <ThemeToggle />;
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

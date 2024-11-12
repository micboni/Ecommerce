import React, { children, useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>il tema attuale è {theme}</p>
      <button onClick={toggleTheme}>Cambia tema</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedComponent></ThemedComponent>
    </ThemeProvider>
  );
}

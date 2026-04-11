import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, blueDarkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "dark";
  });

  const activeTheme = useMemo(() => (isDark ? blueDarkTheme : blueTheme), [isDark]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main
            theme={activeTheme}
            isDark={isDark}
            onToggleTheme={handleThemeToggle}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

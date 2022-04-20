import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(props) => props.theme.bodyFontColor};
    font-family: "Kaushan Script"
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const setGlobalTheme = () => {
    setTheme((currentTheme) =>
      currentTheme.id === "light" ? DarkTheme : LightTheme
    );
  };

  return (
    // Add ThemeProvider
    <ThemeProvider
      theme={{
        ...theme,
        setGlobalTheme,
      }}
    >
      <GlobalStyle />
      {/* Routing config */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: "Kaushan Script"
  }
`;

function App() {
  //Define theme variables
  const theme = {
    primaryColor: "#f8049c",
    secondaryColor: "#fdd54f",
  };

  return (
    // Add ThemeProvider
    <ThemeProvider theme={theme}>
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

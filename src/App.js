import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import MainComponent from "./MainComponent";

function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;
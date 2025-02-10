import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom"; // Fix: Correct import
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ui/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

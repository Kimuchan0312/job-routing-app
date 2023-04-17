import ThemeProvider from "./contexts/ThemeProvider"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <ThemeProvider> 
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      </ThemeProvider> 
      </div>
  );
}

export default App;
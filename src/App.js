import ThemeProvider from "./contexts/ThemeProvider"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index"; 
import './App.css';


function App() {
  return (
    <div>
      <ThemeProvider> 
      <BrowserRouter>
      <Router />
        </BrowserRouter>
      </ThemeProvider> 
      </div>
  );
}

export default App;
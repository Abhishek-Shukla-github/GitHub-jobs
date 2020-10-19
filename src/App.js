import React,{useState} from 'react'
import { Container } from "react-bootstrap";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/loader.css";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <Body />
    </ThemeProvider>
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from "react-bootstrap";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/loader.css";
import Body from "./Body";

function App() {  
  return (
    <div className="App" style={{}}>
      <ThemeProvider>
        <Container>
          <Body />
        </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;

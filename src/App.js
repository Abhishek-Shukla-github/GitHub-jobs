import React from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from "react-bootstrap";

function App() {
  const {jobs,loading,error}=useFetchJobs();
  return (
    <div className="App">
      <Container>
        <h1>Github Jobs</h1>
  {loading && <h1>Loading....</h1>}
  {error && <h1>Error :( ...try refreshing</h1>}
  {jobs && <h1>{jobs.length}</h1>}
      </Container>
    </div>
  );
}

export default App;

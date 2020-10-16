import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from "react-bootstrap";
import Job from './Job';

function App() {
  const {jobs,loading,error}=useFetchJobs();
  return (
    <>
    <div className="App">
      <Container>
        <h1>Github Jobs</h1>
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error :( ...try refreshing</h1>}
        {jobs.map((job)=>{
          //console.log(job);
        return <Job key={job.id} job={job} />
    })}
      </Container>
    </div>
    </>
  );
}

export default App;

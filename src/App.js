import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from "react-bootstrap";
import Job from './Job';
import JobsPagination from "./JobsPagination";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(2)
  const {jobs,loading,error,hasNextPage}=useFetchJobs(params,page);
  return (
    <>
    <div className="App">
      <Container>
        <h1>Github Jobs</h1>
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error :( ...try refreshing</h1>}
        {jobs.map((job)=>{
        return <Job key={job.id} job={job} />
    })}
      </Container>
    </div>
    </>
  );
}

export default App;

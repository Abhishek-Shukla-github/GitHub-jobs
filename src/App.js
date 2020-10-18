import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from "react-bootstrap";
import Job from './Job';
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs,loading,error,hasNextPage}=useFetchJobs(params,page);
  
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return {...prevParams,[param]:value}
    });
  }
  
  return (
    <>
      <div className="App">
        <Container>
          <div style={{backgroundColor:"red",marginBottom:"8rem"}}>
          <AppBar >
            <Toolbar>
              <Typography  variant="h6" color="inherit">
                GitHub Jobs
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="mt-5">
          <SearchForm params={params} onParamChange={handleParamChange}/>
        </div>
        <h1 className="mb-2">Github Jobs</h1>
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

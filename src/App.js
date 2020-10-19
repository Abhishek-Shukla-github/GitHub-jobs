import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from "react-bootstrap";
import Job from './Job';
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import "./styles/loader.css"

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
          <div style={{marginBottom:"5rem"}}>
          <AppBar >
            <Toolbar>
              <Typography  variant="h6" color="inherit">
                GitHub Jobs
              </Typography>
                  <Switch className="ml-3"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
              </Toolbar>
          </AppBar>
        </div>
        <div className="mt-5" style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
          <SearchForm params={params} onParamChange={handleParamChange}/>
        </div>
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
          {loading &&
                <div className="row cf loader">
                  <div className="three col">
                    <div className="loader" id="loader-5">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>}
          {error && <div className="text-center d-flex align-items-center">
            <img src="https://media1.tenor.com/images/f120d1754c380a11c86ecb4e717f0613/tenor.gif" />
            <h1 className="text-danger">Error :( ...try refreshing</h1>
          </div>}
        {jobs.map((job)=>{
        return <Job key={job.id} job={job} />
    })}
      </Container>
    </div>
    </>
  );
}

export default App;

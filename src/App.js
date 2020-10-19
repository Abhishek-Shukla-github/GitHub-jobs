import React,{useState} from 'react'
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from "react-bootstrap";
import { ThemeProvider } from "./contexts/ThemeContext";
import Job from './Job';
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';
import "./styles/loader.css";
import Navbar from './Navbar';
import Loader from "./Loader";
import Error from "./Error";

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
    <ThemeProvider>
      <div className="App">
        <Container>
          <Navbar />
        <div className="mt-5" style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
          <SearchForm params={params} onParamChange={handleParamChange}/>
        </div>
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
          <Loader loading={loading} jobs={jobs} error={error} />
          <Error jobs={jobs} error={error} />
        {jobs.map((job)=>{
        return <Job key={job.id} job={job} />
    })}
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;

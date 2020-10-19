import React, {useState,useContext} from 'react';
import Job from './Job';
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';
import Navbar from './Navbar';
import Loader from "./Loader";
import Error from "./Error";
import useFetchJobs from './hooks/useFetchJobs';
import PageContent from "./PageContent";
import {Container} from "react-bootstrap";

export default function Body() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const style={display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center"}
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
      <Navbar />
      <PageContent>
      <Container>
      <div className="mt-5 text-center">
          <SearchForm params={params} onParamChange={handleParamChange}/>
      </div>
        <div className="d-flex align-items-center justify-content-center">    
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </div>
        <Loader loading={loading} jobs={jobs} />
        <Error jobs={jobs} error={error} />
        {jobs.map((job)=>{
          return <Job key={job.id} job={job} />
        })}
      </Container>
      </PageContent>
    </>
    )
}

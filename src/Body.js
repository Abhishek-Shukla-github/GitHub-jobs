import React, {useState,useContext} from 'react';
import Job from './Job';
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';
import Navbar from './Navbar';
import Loader from "./Loader";
import Error from "./Error";
import useFetchJobs from './hooks/useFetchJobs';
import { ThemeContext } from "./contexts/ThemeContext";



export default function Body() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const { isDarkMode } = useContext(ThemeContext);
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return {...prevParams,[param]:value}
    });
  }
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
  }
  return (
      <>
      <Navbar />
      <div styles={styles}>
        <div className="mt-5" style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
          <SearchForm params={params} onParamChange={handleParamChange}/>
        </div>
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
          <Loader loading={loading} jobs={jobs} error={error} />
          <Error jobs={jobs} error={error} />
        {jobs.map((job)=>{
          return <Job key={job.id} job={job} />
        })}
      </div>
      </>
    )
}

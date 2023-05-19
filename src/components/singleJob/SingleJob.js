import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { jobSingleFetch } from "../../redux/actionCreators/jobActionCreators"
import JobDetailsSkeleton from "../commonComponents/skeletons/JobDetailsSkeleton"
import JobSideBarSkeleton from "../commonComponents/skeletons/JobSideBarSkeleton"
import JobDetails from "./jobDetailsSection/JobDetails"
import JobSideBar from "./jobSideBar/JobSideBar"
import MostRecentJob from "./mostRecentSection/MostRecentJob"

const SingleJob = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [singleJob, setAllJobs] = useState({})
  console.log(id)

  useEffect(async () => {
    const url = "https://portal-production-7595.up.railway.app/job/get-jobs/?id="+ id;
    const requestOptions = {
      // method: "POST",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + window.localStorage.getItem("token"),
      },
      // body: JSON.stringify(payload),
    };
    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    console.log(responseData)
	  setAllJobs(responseData.data)
  }, [singleJob]);

  return (
    <>
      <div className='apply-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              {/* {singleJob === null && <JobDetailsSkeleton />} */}
              {/* {singleJob !== null && <JobDetails data={singleJob} />} */}
            </div>
            <div className='col-lg-4'>
              {/* {singleJob === null && <JobSideBarSkeleton />}
              {singleJob !== null && <JobSideBar data={singleJob} />} */}
            </div>
          </div>
        </div>
      </div>
      <MostRecentJob />
    </>
  )
}

export default SingleJob

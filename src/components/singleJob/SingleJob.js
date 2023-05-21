import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobSingleFetch } from "../../redux/actionCreators/jobActionCreators";
import JobDetailsSkeleton from "../commonComponents/skeletons/JobDetailsSkeleton";
import JobSideBarSkeleton from "../commonComponents/skeletons/JobSideBarSkeleton";
import JobDetails from "./jobDetailsSection/JobDetails";
import JobSideBar from "./jobSideBar/JobSideBar";
import MostRecentJob from "./mostRecentSection/MostRecentJob";
import axios from "axios";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleJob, setAllJobs] = useState({});
  console.log(id);

  const getToken = async () => {
    let token = localStorage.getItem("token");
    return token;
  };

  const getSingleJob = async () => {
    let res;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url:
        "https://portal-production-7595.up.railway.app/job/get-jobs?id=" + id,
      headers: {},
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        res = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  };
  useEffect(() => {
    const apiCall = async () => {
      let data = await getSingleJob();
      setAllJobs(data);
    };
    apiCall();
  }, []);

  return (
    <>
      <div className="apply-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {singleJob === null && <JobDetailsSkeleton />}
              {singleJob !== null && <JobDetails data={singleJob} />}
            </div>
            <div className="col-lg-4">
              {singleJob === null && <JobSideBarSkeleton />}
              {singleJob !== null && <JobSideBar data={singleJob} />}
            </div>
          </div>
        </div>
      </div>
      <MostRecentJob />
    </>
  );
};

export default SingleJob;

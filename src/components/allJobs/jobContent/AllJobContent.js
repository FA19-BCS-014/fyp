import UserNoItems from "components/userProfile/common/UserNoItems";
import { useEffect } from "react";
import { FaServer, FaSortAmountDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { jobAllPaginationFetch } from "../../../redux/actionCreators/jobActionCreators";
import JobBlock from "../../commonComponents/commonBlock/jobBlock/JobBlock";
import JobBlockSkeleton from "../../commonComponents/skeletons/JobBlockSkeleton";
import Pagination from "../pagination/Pagination";
import NoItem from "components/commonComponents/noItem/NoItem";
import { useState } from "react";
import axios from "axios";
const AllJobContent = ({ finalSearch }) => {
  const dispatch = useDispatch();
  const [allJobsPagination, setAllJobs] = useState([]);
  const count = allJobsPagination?.count;

  console.log(finalSearch);
  const { title, location, type } = finalSearch ? finalSearch : [];

  // useEffect(async () => {
  //   const url = "http://ttfyp-production.up.railway.app/job/get-jobs";
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "token " + window.localStorage.getItem("token"),
  //     },
  //   };
  //   const response = await fetch(url, requestOptions);
  //   const responseData = await response.json();
  //   setAllJobs(responseData.data);
  // }, []);

  useEffect(() => {
    const url = "https://ttfyp-production.up.railway.app/job/get-jobs";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + window.localStorage.getItem("token"),
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        const responseData = response.data;
        setAllJobs(responseData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const jobs = allJobsPagination
    ?.filter((job) => {
      if (title === " ") {
        return job;
      } else if (job.title?.toLocaleLowerCase().includes(title)) {
        return job;
      }
    })
    .filter((job) => {
      if (location === " ") {
        return job;
      } else if (job.location?.toLocaleLowerCase().includes(location)) {
        return job;
      }
    })
    .filter((job) => {
      if (type === NaN || type === "") {
        return job;
      } else if (job.type === type) {
        return job;
      }
    })

    .map((job, index) => {
      console.log(job);
      return (
        <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
          <JobBlock job={job} />
        </div>
      );
    });

  const jobsSkeleton = [1, 2, 3, 4, 5, 6].map((index) => {
    return (
      <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
        <JobBlockSkeleton />
      </div>
    );
  });

  return (
    <div className="content-area">
      <div className="grid-header d-flex justify-content-between">
        <div className="filter-header">
          <span>
            <FaServer />
          </span>
          <span className="filter-header-text">
            Showing {jobs != null ? jobs.length : "0"} of Total {count} Jobs
            Nearby
          </span>
        </div>
        <div className="filter-header right">
          <span className="filter-header-text">Sort : Newest first</span>
          <span>
            <FaSortAmountDown />
          </span>
        </div>
      </div>
      <div className="all-filtered-job">
        <div className="row">
          {allJobsPagination === null && jobsSkeleton}
          {allJobsPagination !== null && allJobsPagination.length === 0 ? (
            <NoItem text="No Jobs Posted Yet" />
          ) : (
            jobs
          )}
          {jobs?.length === 0 && (
            <div className="col-lg-12">
              <UserNoItems text="No Job Available" />
            </div>
          )}
        </div>
      </div>

      <div className="job-pagination mb-40">
        <div className="row">
          <div className="col-lg-7 offset-lg-2">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobContent;

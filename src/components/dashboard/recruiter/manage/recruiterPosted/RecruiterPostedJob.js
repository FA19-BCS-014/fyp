import { useEffect, useState } from "react";
import PostedJobFilterBar from "./PostedJobFilterBar";
import PostedJobBlock from "./PostedJobBlock";
import { useSelector, useDispatch } from "react-redux";
import { jobByRecruiter } from "redux/actionCreators/jobActionCreators";
import Spinner from "components/commonComponents/spinner/Spinner";
import NoItem from "components/commonComponents/noItem/NoItem";

const RecruiterPostedJob = () => {
  document.title = "HourlyFinder | Manage Jobs";
  const [recruiterJobs, setRecruiterJobs] = useState([]);

  useEffect(async () => {
    const url = "https://ttfyp-production.up.railway.app/job/";
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
    setRecruiterJobs(responseData.data);
  }, []);

  return (
    <div className="dashboard-main">
      <h3 className="dashboard-title">Manage Posted Jobs</h3>
      <div className="dashboard-content">
        <div className="manage-job-area content">
          {recruiterJobs !== null ? (
            recruiterJobs.length !== 0 ? (
              <>
                <PostedJobFilterBar />
                <div className="manage-job-table">
                  <table width="100%">
                    <thead>
                      <tr>
                        <th className="title">Job Title</th>
                        <th className="status">Status</th>
                        <th className="date">Last Date</th>
                        <th className="action">Action</th>
                      </tr>
                    </thead>
                    <tbody className="job-data">
                      {recruiterJobs?.map((job, idx) => (
                        <PostedJobBlock key={idx} job={job} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <NoItem text="You never posted any jobs" />
            )
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterPostedJob;

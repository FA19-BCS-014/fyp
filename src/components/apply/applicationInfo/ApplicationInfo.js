import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { useJobType, useTimeSince } from "../../../hooks/useJobHook";
import Tags from "../../commonComponents/tagElement/Tags";
import { useEffect } from "react";

const ApplicationInfo = ({ userData }) => {
  // const { title, salary, created, keyword, type } = props.userData.job
  // const { bio, phone, designation } = props.userData.recruiter
  // const { name, moto, description, logo, location } = props.userData.company
  // const { email, username, first_name, last_name } = props.userData.user
  // const imagePath = process.env.REACT_APP_BACKEND_SERVER

  // const jobType = useJobType(type)
  // const timeSince = useTimeSince(DateTime.fromISO(created))
  useEffect(() => {
    console.log("====================================");
    console.log(userData);
    console.log("====================================");
  }, []);

  return (
    <div className="job-application-info">
      <div className="info">
        <div className="normal-logo">
          <h3>JobGuru</h3>
        </div>
        <div className="job-application-title">
          <h2>{userData?.title}</h2>
          <p>
            <span className="job_status">Full Time</span> in{" "}
            <span className="location">{userData?.location}</span>
          </p>
        </div>
        <div className="application-company-profile d-flex align-items-center">
          {/* <Link to={`/user/${userData?.user.username}`}>
            <img src={imagePath + logo} alt="logo" className="img-fluid" />
          </Link> */}
          <div className="application-company-name">
            {/* <Link to={`/user/${userData?.user.username}`}>
              <h5>{userData?.user.username}</h5>
            </Link> */}
            {/* <p>{moto}</p> */}
          </div>
        </div>
        <p className="job-overview">{userData?.overview}</p>
        <div className="job-budget-time">
          <h3>
            Salary: Rs.<span>{userData?.salary}</span>
          </h3>
          <p className="post-time">
            Posted <span>{userData?.starting}</span>
          </p>
        </div>
        <Tags tags={userData?.todo}></Tags>
      </div>
    </div>
  );
};

export default ApplicationInfo;

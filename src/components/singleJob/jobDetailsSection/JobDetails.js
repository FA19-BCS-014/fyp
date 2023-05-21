import Tags from "components/commonComponents/tagElement/Tags";
import { Link } from "react-router-dom";
import { useJobType } from "hooks/useJobHook";
import LeafletMap from "components/commonComponents/map/LeafletMap";
import BasicInfoBlock from "components/commonComponents/commonBlock/basicInfoBlock/BasicInfoBlock";

const JobDetails = ({ data }) => {
  //   const {
  //     title,
  //     image,
  //     keyword,
  //     latlng,
  //     location,
  //     overview,
  //     todo,
  //     skill,
  //     type,
  //   } = data;
  //   const { name, logo } = data.company;
  //   const { username } = data.user;
  //   const imagePath = process.env.REACT_APP_BACKEND_SERVER;

  //   const jobType = useJobType(type);

  return (
    <div className="apply-left">
      <div
        className="recruiter-company-cover"
        // style={{ backgroundImage: `url(${imagePath + image})` }}
      >
        <div
          className="company-profile"
          //   style={{ backgroundImage: `url(${imagePath + logo})` }}
        ></div>
      </div>
      <div className="jobs-details-information">
        <div className="single-job-title">
          <h2>{data?.title}</h2>
          {/* <Tags tags={keyword} tagName="jobs" /> */}
          <p>
            <Link to={`/user/${data?.user?.username}`} className="company">
              {data?.user?.username}
            </Link>
            ,
            <Link to={`/location/${data?.location}`} className="location">
              {data?.location}
            </Link>
          </p>
        </div>

        {/* <BasicInfoBlock job={data.job} /> */}

        <div className="single-job-details">
          <h3>Overview</h3>
          <p>{data?.overview}</p>
        </div>
        <div className="single-job-details">
          <h3>Duties and Responsibilities</h3>
          <p>{data?.todo}</p>
        </div>
        <div className="single-job-details">
          <h3>Skill Requirements</h3>
          <div className="require-skills">
            <nav>
              <ul>
                <li>{data?.skill}</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="single-job-details">
          <h3>Location &amp; Maps</h3>
          <p>1.2 Km away from your location.</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

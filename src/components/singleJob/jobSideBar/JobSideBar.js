import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const JobSideBar = ({ data }) => {
  // const { id, salary } = props.data.job
  // const { picture, designation } = props.data.recruiter
  // const { moto, description, logo, location } = props.data.company
  // const { email, username, first_name, last_name } = props.data.user
  // const imagePath = process.env.REACT_APP_BACKEND_SERVER

  return (
    <div className="apply-sidebar">
      <div className="application-budget-information sidebar-padding">
        <p>Client Budget</p>
        <h4 className="budget">PKR. {data?.salary}</h4>
        <Link to={`/apply/${data?.id}`} className="btn btn-main">
          Apply Now
        </Link>
        <Link to="" className="btn btn-alt">
          Save to wishlist
        </Link>
      </div>
      <div className="about-recruiter-profile sidebar-padding">
        <h4>About the recruiter</h4>
        <div className="recruiter-profile-name">
          <div className="profile-info d-flex align-items-center">
            <Link to={`/user/${data?.user?.username}`}>
              <img
                src={data?.image}
                alt="Recruiter Profile"
                className="img-fluid"
              />
            </Link>
            <div className="profile-name">
              <Link to={`/user/${data?.user?.username}`}>
                <h5>{data?.user?.username}</h5>
              </Link>
              <p>Recruiter</p>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <nav>
            <ul>
              <li>
                <FaEnvelope />
                {data?.user?.username}
              </li>
              <li>
                <FaMapMarkerAlt />
                {data?.location}
              </li>
              <li>
                <FaBriefcase />
                {data?.title}
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile-gallery">
          <p>{data?.overview}</p>
          <Link to={`/user/${data?.user?.username}`} className="more-info">
            More info on the recruiter
          </Link>
          <div className="gallery">
            {/* <img src={imagePath + logo} alt='gallery' className='img-fluid' /> */}
            <p>{data?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSideBar;

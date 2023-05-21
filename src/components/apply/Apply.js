import { useSelector } from "react-redux";
import ApplicationInfo from "./applicationInfo/ApplicationInfo";
import { useParams } from "react-router-dom";
import ApplyForm from "./applyForm/ApplyForm";
import { useEffect, useState } from "react";
import axios from "axios";

const Apply = () => {
  //   const singleJob = useSelector((state) => state.job.singleJob);
  const { id } = useParams();
  const [singleJob, setAllJobs] = useState({});
  console.log(id);

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
        console.log(JSON.stringify(response.data.data, +"Test"));
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
    <div className="jobs-application-area registration-area">
      <div className="application-box">
        <ApplyForm id={singleJob.id} />
        <ApplicationInfo userData={singleJob} />
      </div>
    </div>
  );
};

export default Apply;

import { useEffect, useState } from "react";
import API from "../services/api";

function Job() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");

      console.log("Jobs Response:", res.data);

      if (Array.isArray(res.data)) {
        setJobs(res.data);
      } else if (Array.isArray(res.data.jobs)) {
        setJobs(res.data.jobs);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
const applyJob = async (jobId) => {
  try {
    await API.post(
      `/applications/apply/${jobId}`,
      {},
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    alert("Applied Successfully");
  } catch (err) {
    console.log(err);
    alert("Application Failed");
  }
};
  return (
    <div className="jobs-page">
      <h1 className="jobs-title">
        Available Opportunities
      </h1>

      <div className="jobs-grid">
        {jobs.length === 0 ? (
          <h3>No Jobs Found</h3>
        ) : (
          jobs.map((job) => (
            <div
              className="job-card"
              key={job._id}
            >
              <h2>{job.companyName}</h2>

              <p>💼 {job.role}</p>

              <p>💰 {job.package}</p>

              <p>📍 {job.location}</p>

              <button
                onClick={() =>
                  applyJob(job._id)
                }
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Job;